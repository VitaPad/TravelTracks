import { Link } from "react-router-dom";
import css from "./ViewNowLink.module.css";

export default function ViewNowLink() {
  return (
    <>
      <Link to="/catalog" className={css.link}>
        View Now
      </Link>
    </>
  );
}
