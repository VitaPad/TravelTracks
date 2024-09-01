import { useSelector } from "react-redux";
import { selectTruckById } from "../../redax/catalog/selector";
import css from "./FeauterInfo.module.css";
import sprite from "../../assets/sprite/sprite.svg";
import DetailsInfo from "../DetailsInfo/DetailsInfo";

export default function FeauterInfo({ id }) {
  const truck = useSelector((state) => selectTruckById(state, id));

  return (
    <div className={css.container}>
      <div className={css.box}>
        {truck.transmission && (
          <p className={css.text}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-diagram`}></use>
            </svg>
            {truck.transmission}
          </p>
        )}
        {truck.AC ? (
          <p className={css.text}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-wind`}></use>
            </svg>
            AC
          </p>
        ) : null}
        {truck.engine ? (
          <p className={css.text}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-engine`}></use>
            </svg>
            {truck.engine}
          </p>
        ) : null}
        {truck.kitchen && (
          <p className={css.text}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-cup-hot`}></use>
            </svg>
            Kitchen
          </p>
        )}
        {truck.radio ? (
          <p className={css.text}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-radios`}></use>
            </svg>
            Radio
          </p>
        ) : null}
        {truck.bathroom ? (
          <p className={css.text}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-bathroom`}></use>
            </svg>
            Bathroom
          </p>
        ) : null}
      </div>
      <DetailsInfo id={id} />
    </div>
  );
}
