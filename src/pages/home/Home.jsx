import React from 'react'
import styles from "./home.module.css";

import { useData } from '../../context/StockContext';

export const Home = () => {
    const {state:{inventory}}=useData();

    const totalStock=inventory.reduce((total, item) => total + item.stock, 0);
    const totalDelivered=inventory.reduce((total, item) => total + item.delivered, 0);
    const lowStock=inventory.reduce((count, item) => (item.stock <= 10 ? count + 1 : count), 0);

  return (
    <div className={styles.container}>
        <article className={styles.card}>
            <span className={styles.green}>{totalStock}</span>
            <p>Total Stock</p>
        </article>

        <article className={styles.card}>
            <span className={styles.yellow}>{totalDelivered}</span>
            <p>Total Delivered</p>
        </article>

        <article className={styles.card}>
            <span className={styles.red}>{lowStock}</span>
            <p>Low Stock Items</p>
        </article>

    </div>
  )
}
// total stock is total quantity of all items that exist in inventory
// total delivered all items delivered in all inventory
// low sstock items