import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import styles from "./Navigation.module.scss";
import { NavigationItem } from "./NavigationItem";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <nav className={`${styles.navbar} font-uppercase`}>
      <div className={styles.burger}>
        <MenuIcon onClick={toggleMenu} />
      </div>
      <ul className={isMenuOpen ? styles.menu : "none"} onClick={toggleMenu}>
        <NavigationItem url="/" label="Home" />
        <NavigationItem url="/hot" label="Hot" />
        <NavigationItem url="/regular" label="Regular" />
        <NavigationItem url="/favourites" label="Favourites" />
        <NavigationItem url="/add-meme" label="Add meme" />
      </ul>
    </nav>
  );
};
