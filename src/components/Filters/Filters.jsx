import { useDispatch, useSelector } from "react-redux";
import sprite from "../../assets/sprite/sprite.svg";
import css from "../Filters/Filters.module.css";
import {
  selectAC,
  selectBathroom,
  selectForm,
  selectKitchen,
  selectTransmission,
  selectTV,
} from "../../redax/filter/selector";
import {
  setACFilter,
  setBathroomFilter,
  setFormFilter,
  setKitchenFilter,
  setTransmissionFilter,
  setTVFilter,
} from "../../redax/filter/slice";
/* import { selectIsLoading } from "../../redax/catalog/selector"; */
import { fetchTruksFilter } from "../../redax/catalog/operation";
import { useEffect } from "react";

export function Filters() {
  const dispatch = useDispatch();
  const form = useSelector(selectForm);
  const AC = useSelector(selectAC);
  const transmission = useSelector(selectTransmission);
  const kitchen = useSelector(selectKitchen);
  const tv = useSelector(selectTV);
  const bathroom = useSelector(selectBathroom);

  useEffect(() => {
    dispatch(
      fetchTruksFilter({
        currentPage: 1,
        itemsPerPage: 10,
        filters: { form, AC, transmission, kitchen, tv, bathroom },
      })
    );
  }, [dispatch, form, AC, transmission, kitchen, tv, bathroom]);

  return (
    <div className={css.wrapper}>
      <h3 className={css.h3}>Filters</h3>
      <h2 className={css.h2}>Vehicle equipment</h2>
      <div className={css.container}>
        <button
          className={css.text}
          onClick={() => dispatch(setTransmissionFilter())}
        >
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-diagram`}></use>
          </svg>
          Automatic
        </button>
        <button
          className={css.text}
          onClick={() => dispatch(setKitchenFilter())}
        >
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-cup-hot`}></use>
          </svg>
          Kitchen
        </button>
        <button className={css.text} onClick={() => dispatch(setACFilter())}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-wind`}></use>
          </svg>
          AC
        </button>
        <button className={css.text} onClick={() => dispatch(setTVFilter())}>
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-tv`}></use>
          </svg>
          TV
        </button>
        <button
          className={css.text}
          onClick={() => dispatch(setBathroomFilter())}
        >
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-bathroom`}></use>
          </svg>
          Bathroom
        </button>
      </div>
      <div className={css.container}>
        <button
          className={css.text}
          onClick={() => dispatch(setFormFilter("Van"))}
        >
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-bi_grid-1x2`}></use>
          </svg>
          Van
        </button>
        <button
          className={css.text}
          onClick={() => dispatch(setFormFilter("Fully Integrated"))}
        >
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-bi_grid`}></use>
          </svg>
          Fully Integrated
        </button>
        <button
          className={css.text}
          onClick={() => dispatch(setFormFilter("Alcove"))}
        >
          <svg className={css.icon} width="32" height="32">
            <use href={`${sprite}#icon-bi_grid-3x3-gap`}></use>
          </svg>
          Alcove
        </button>
      </div>
    </div>
  );
}
