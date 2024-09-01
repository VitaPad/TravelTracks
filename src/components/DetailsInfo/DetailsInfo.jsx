import { useSelector } from "react-redux";
import { selectTruckById } from "../../redax/catalog/selector";
import css from "./DetailsInfo.module.css";

export default function DetailsInfo({ id }) {
  const truck = useSelector((state) => selectTruckById(state, id));
  return (
    <div className={css.container}>
      <h3 className={css.h3}>Vehicle details</h3>
      <div className={css.wrapper}>
        <div className={css.flexRow}>
          <p className={css.text}>Form</p>
          <p className={css.text}>{truck.form}</p>
        </div>
        <div className={css.flexRow}>
          <p className={css.text}>Length</p>
          <p className={css.text}>{truck.length}</p>
        </div>
        <div className={css.flexRow}>
          <p className={css.text}>Width</p>
          <p className={css.text}>{truck.width}</p>
        </div>
        <div className={css.flexRow}>
          <p className={css.text}>Height</p>
          <p className={css.text}>{truck.height}</p>
        </div>
        <div className={css.flexRow}>
          <p className={css.text}>Tank</p>
          <p className={css.text}>{truck.tank}</p>
        </div>
        <div className={css.flexRow}>
          <p className={css.text}>Consumption</p>
          <p className={css.text}>{truck.consumption}</p>
        </div>
      </div>
    </div>
  );
}
