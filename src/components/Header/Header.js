import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
      <h1>LOGO</h1>
        <ul className={styles.center}>
          <NavLink className={styles.navlink} to="/">
            Home
          </NavLink>
          <NavLink className={styles.navlink} to="/products">
            Products
          </NavLink>
          <NavLink className={styles.navlink} to="/contact">
            Contacto
          </NavLink>
        </ul>
        <div className={styles.right}>
          <input type="text" />
          <h3>cart</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
