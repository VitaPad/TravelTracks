import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import logoImage from "../../assets/Logo.png";

export default function Logo() {
  return (
    <NavLink to="/" className={css.logo}>
      <img src={logoImage} alt="Логотип" className={css.logoImage} />
    </NavLink>
  );
}
