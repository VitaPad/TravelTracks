import { useDispatch, useSelector } from "react-redux";
import css from "./LocationFiltr.module.css";
import { setLocationFilter } from "../../redax/filter/slice";
import { selectLocation } from "../../redax/filter/selector";
import { fetchTruksFilter } from "../../redax/catalog/operation";
import { useEffect } from "react";

export default function LocationFiltr() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  function handleFilerLocation(event) {
    const value = event.target.value.trim();
    dispatch(setLocationFilter(value));
  }

  useEffect(() => {
    // Виклик асинхронного тхунку при зміні фільтра
    dispatch(
      fetchTruksFilter({
        currentPage: 1,
        itemsPerPage: 10,
        filters: { location },
      })
    );
  }, [dispatch, location]);

  return (
    <div className={css.container}>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <input
        type="text"
        id="location"
        className={css.input}
        placeholder="Country, City"
        onChange={handleFilerLocation}
        value={location}
      />
    </div>
  );
}
