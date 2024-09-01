import { Link } from "react-router-dom";
import css from "./ShowMoreBtn.module.css";

export default function ShowMoreBtn({ id }) {
  return (
    <Link to={`/campers/${id}`} className={css.link}>
      Show More
    </Link>
  );
}
