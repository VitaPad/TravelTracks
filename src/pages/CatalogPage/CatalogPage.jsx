import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
/* import css from "./CatalogPage.module.css"; */

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
import { Header } from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import { setPage } from "../../redax/catalog/slice";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const trucks = useSelector(selectTrucks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const hasNextPage = useSelector(selectHasNextPage);

  const handleLoadMore = () => {
    console.log("Load more clicked");
    if (hasNextPage) {
      dispatch(setPage(currentPage + 1)); // Збільшуємо номер сторінки
    }
  };

  useEffect(() => {
    dispatch(fetchTrucks({ currentPage, itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);
  console.log("Trucks:", trucks);
  return (
    <>
      <Header />
      {isLoading && <Loading />}
      {error && <p>Error: {error}</p>}
      <div>
        {trucks.map((truck, index) => (
          <div key={`${truck.id}-${index}`}>
            <h2>{truck.name}</h2>
            <p>{truck.description}</p>
            <p>€ {truck.price} </p>
            <p> {truck.location}</p>
            <p> {truck.rating}</p>
            <p> {truck.transmission}</p>
            <p> {truck.engine}</p>
            {truck.kitchen && <p>Kitchen</p>}
            {truck.AC && <p>AC</p>}
            {truck.radio && <p>Radio</p>}
            {truck.bathroom && <p>Bathroom</p>}
            {truck.gallery.length > 0 && (
              <img
                src={truck.gallery[0].thumb}
                alt={truck.name}
                style={{ width: "100px", height: "auto", marginBottom: "10px" }}
              />
            )}
          </div>
        ))}
      </div>

      {hasNextPage && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
}
