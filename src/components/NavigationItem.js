import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const NavigationItem = ({ url, label }) => {
  return (
    <li className="font-uppercase">
      <NavLink
        to={url}
        className={({ isActive }) => (isActive ? styles.active : null)}
      >
        {label}
      </NavLink>
    </li>
  );
};
