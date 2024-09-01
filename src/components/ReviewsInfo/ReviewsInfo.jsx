import { useSelector } from "react-redux";
import sprite from "../../assets/sprite/sprite.svg";
import { selectTruckById } from "../../redax/catalog/selector";
import css from "./ReviewsInfo.module.css";

export default function RewiewsInfo({ id }) {
  const truck = useSelector((state) => selectTruckById(state, id));
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`${css.icon} ${
            i < rating ? css.activeStar : css.inactiveStar
          }`}
          width="20"
          height="20"
        >
          <use href={`${sprite}#icon-Rating`}></use>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className={css.container}>
      {truck.reviews.map((review, index) => (
        <div key={index} className={css.personWrapper}>
          <div className={css.person}>
            <div className={css.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <p className={css.name}>{review.reviewer_name}</p>
            <div className={css.stars}>
              {renderStars(review.reviewer_rating)}
            </div>
            <span>{review.reviewer_rating}</span>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
