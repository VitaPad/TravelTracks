import sprite from "../../assets/sprite/sprite.svg";
import css from "../Filters/Filters.module.css";

export function Filters() {
  return (
    <div className={css.wrapper}>
      <h3 className={css.h3}>Filters</h3>
      <h2 className={css.h2}>Vehicle equipment</h2>
      <div className={css.container}>
        <p className={css.text}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-diagram`}></use>
          </svg>
          Automatic
        </p>
        <p className={css.text}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-cup-hot`}></use>
          </svg>
          Kitchen
        </p>
        <p className={css.text}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-wind`}></use>
          </svg>
          AC
        </p>
        <p className={css.text}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-radios`}></use>
          </svg>
          Radio
        </p>
        <p className={css.text}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-bathroom`}></use>
          </svg>
          Bathroom
        </p>
      </div>
      <div className={css.container}>
        <p className={css.text}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-bi_grid-1x2`}></use>
          </svg>
          Van
        </p>
        <p className={css.text}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-bi_grid`}></use>
          </svg>
          Fully Integrated
        </p>
        <p className={css.text}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-bi_grid-3x3-gap`}></use>
          </svg>
          Alcove
        </p>
      </div>
    </div>
  );
}
