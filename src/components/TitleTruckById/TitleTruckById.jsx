import { useSelector } from "react-redux";
import css from "./TitleTruckById.module.css";
import { selectTruckById } from "../../redax/catalog/selector";
import sprite from "../../assets/sprite/sprite.svg";

export default function TitleTruckById({ id }) {
  const truck = useSelector((state) => selectTruckById(state, id));
  return (
    <div className={css.container}>
      <h2 className={css.title}>{truck.name}</h2>
      <div className={css.box}>
        <p className={`${css.rating_text} ${css.underline}`}>
          <svg className={css.icon} width="20" height="20">
            <use href={`${sprite}#icon-Rating`}></use>
          </svg>
          {truck.rating} ({truck.reviews.length} Reviews)
        </p>
        <p className={css.location}>
          <svg className={css.icon} width="16" height="16">
            <use href={`${sprite}#icon-Map`}></use>
          </svg>
          {truck.location}
        </p>
      </div>
      <p className={css.price}>€{truck.price}.00</p>
      <div>
        {truck.gallery.map((item, index) => (
          <img
            className={css.img}
            key={index}
            src={item.original}
            alt="Truck Image"
          />
        ))}
      </div>
      <p className={css.description}>{truck.description}</p>
    </div>
  );
}
