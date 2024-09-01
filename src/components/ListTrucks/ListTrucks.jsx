import { setPage } from "../../redax/catalog/slice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchTrucks } from "../../redax/catalog/operation";
import {
  selectCurrentPage,
  selectError,
  selectHasNextPage,
  selectIsLoading,
  selectItemsPerPage,
  selectTrucks,
} from "../../redax/catalog/selector";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import css from "./ListTrucks.module.css";
import sprite from "../../assets/sprite/sprite.svg";
import ShowMoreBtn from "../ShowMoreBtn/ShowMoreBtn";
import { selectLocation } from "../../redax/filter/selector";

export default function ListTrucks() {
  const dispatch = useDispatch();

  const trucks = useSelector(selectTrucks);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const hasNextPage = useSelector(selectHasNextPage);
  const isLoading = useSelector(selectIsLoading);
  const location = useSelector(selectLocation);

  const handleLoadMore = () => {
    if (hasNextPage) {
      dispatch(setPage(currentPage + 1));
    }
  };

  useEffect(() => {
    dispatch(fetchTrucks({ currentPage, itemsPerPage, filters: { location } }));
  }, [dispatch, currentPage, itemsPerPage, location]);

  return (
    <div className={css.container}>
      {error && <p>Error: {error}</p>}
      <div className={css.wrapper}>
        {trucks.map((truck) => (
          <div key={truck.id} className={css.box}>
            <div>
              {truck.gallery.length > 0 && (
                <img
                  className={css.img}
                  src={truck.gallery[0].thumb}
                  alt={truck.name}
                />
              )}
            </div>
            <div>
              <h2 className={css.name}>{truck.name}</h2>

              <p className={css.price}>
                € {truck.price}
                <svg className={css.icon_price} width="24" height="24">
                  <use href={`${sprite}#icon-hesrt-black`}></use>
                </svg>
              </p>

              <div className={css.rating}>
                <p className={`${css.rating_text} ${css.underline}`}>
                  <svg className={css.icon} width="20" height="20">
                    <use href={`${sprite}#icon-Rating`}></use>
                  </svg>
                  {truck.rating} ({truck.reviews.length} Reviews)
                </p>
                <p className={css.rating_text}>
                  <svg className={css.icon} width="20" height="20">
                    <use href={`${sprite}#icon-Map`}></use>
                  </svg>
                  {truck.location}
                </p>
              </div>
              <p className={css.description}>{truck.description}</p>
              <p className={css.text}>
                <svg className={css.icon} width="20" height="20">
                  <use href={`${sprite}#icon-diagram`}></use>
                </svg>
                {truck.transmission}
              </p>
              <p className={css.text}>
                <svg className={css.icon} width="20" height="20">
                  <use href={`${sprite}#icon-engine`}></use>
                </svg>
                {truck.engine}
              </p>
              {truck.kitchen && (
                <p className={css.text}>
                  <svg className={css.icon} width="20" height="20">
                    <use href={`${sprite}#icon-engine`}></use>
                  </svg>
                  {truck.engine}
                </p>
              )}
              {truck.AC && (
                <p className={css.text}>
                  <svg className={css.icon} width="20" height="20">
                    <use href={`${sprite}#icon-wind`}></use>
                  </svg>
                  AC
                </p>
              )}
              {truck.radio && (
                <p className={css.text}>
                  <svg className={css.icon} width="20" height="20">
                    <use href={`${sprite}#icon-radios`}></use>
                  </svg>
                  Radio
                </p>
              )}
              {truck.bathroom && (
                <p className={css.text}>
                  <svg className={css.icon} width="20" height="20">
                    <use href={`${sprite}#icon-bathroom`}></use>
                  </svg>
                  Bathroom
                </p>
              )}
              <ShowMoreBtn id={truck.id} />
            </div>
          </div>
        ))}
      </div>
      {hasNextPage && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
}
