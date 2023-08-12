import React from 'react'
import styles from "./products.module.css";

import { useData } from '../../context/StockContext';
import { FilterBar } from '../../components/filterBar/FilterBar';
import { Link } from 'react-router-dom';

export const Products = () => {
    const {state:{inventory}}=useData();
  return (
    <div className={styles[`page-container`]}>
        <FilterBar />

        <main className={styles.main}>
            <li key={0} className={styles.heading}>
                <strong className={styles.img}>Image</strong>
                <strong className={styles.name}>Name</strong>
                <strong className={styles.description}>Description</strong>
                <strong className={styles.price}>Price</strong>
                <strong className={styles.stock}>Stock</strong>
                <strong className={styles.supplier}>Supplier</strong>
            </li>
            {inventory.map(({id,imageUrl,name,description,price,stock,supplier})=>(
                <li key={id} className={styles.list}>
                    <img className={styles.img} alt="product" src={imageUrl} width={150} height={150} />
                    <Link className={styles.name} to={`/products/${id}`}>{name}</Link>
                    <p className={styles.description}>{description}</p>
                    <span className={styles.price}>${price}</span>
                    <span className={styles.stock}>{stock}</span>
                    <p className={styles.supplier}>{supplier}</p>
                </li>
            ))}
        </main>
    </div>
  )
}
//id image name descrip price stock supplier