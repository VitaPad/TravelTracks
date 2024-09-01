import { Filters } from "../Filters/Filters";
import LocationFiltr from "../LocationFiltr/LocationFiltr";
import css from "./SearchTrucks.module.css";

export default function SearchTrucks() {
  return (
    <div className={css.container}>
      <LocationFiltr />
      <Filters />
    </div>
  );
}
