import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
   <nav className={css.container}>
        <NavLink to="/" className={css.getNavLink}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.getNavLink}>
          Catalog
        </NavLink>
      </nav>
  );
}
