import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>LOGO</h1>
                <input type="text" /> 
            <div className={styles.navbar}>
                <ul className={styles.navbarul}>
                <NavLink className={styles.navlink} to="/">Home</NavLink>
                <NavLink className={styles.navlink} to="/">Products</NavLink>
                <NavLink className={styles.navlink} to="/">Cart</NavLink>
               </ul>
            </div>
        </div>
    )
}

export default Header
