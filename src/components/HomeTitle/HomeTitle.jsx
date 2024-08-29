import css from "./HomeTitle.module.css";

export default function HomeTitle() {
  return (
    <div>
      <h1 className={css.h1}>Campers of your dreams</h1>
      <h2 className={css.h2}>
        You can find everything you want in our catalog
      </h2>
    </div>
  );
}
