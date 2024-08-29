import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTrucks } from "../../redax/catalog/operation";
import {
  selectError,
  selectIsLoading,
  selectTrucks,
} from "../../redax/catalog/selector";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const trucks = useSelector(selectTrucks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {trucks.map((truck) => (
          <div key={truck.id}>
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
                src={truck.gallery[0].thumb} // Використання першої мініатюри
                alt={truck.name}
                style={{ width: "100px", height: "auto", marginBottom: "10px" }}
              />
            )}

            {/* Додаткові дані, як-от рейтинги, типи авто тощо */}
          </div>
        ))}
      </div>
    </>
  );
}
