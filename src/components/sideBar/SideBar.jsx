import React from 'react'
import styles from "./sideBar.module.css";
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div className={styles.container}>
        <Link className={styles.link} to="/">Dashboard</Link>
        <Link className={styles.link} to="/departments">Departments</Link>
        <Link className={styles.link} to="/products">Products</Link>
    </div>
  )
}
