import React, { useEffect } from 'react'
import styles from "./products.module.css";

import { useData } from '../../context/StockContext';
import { FilterBar } from '../../components/filterBar/FilterBar';
import { Link } from 'react-router-dom';
import {getLocalStorage} from "../../utils/utilFunctions";

export const Products = () => {
    const {state:{inventory,currentDepartment,currentFilter,isLowStock},dispatch}=useData();

    const filteredByDepartment=currentDepartment!=="All"?inventory.filter(({department})=>department.toLowerCase()==currentDepartment):inventory;
    const sortByFilter=(filteredInventory)=>{
        if(currentFilter==="price")
        {
            return [...filteredInventory].sort((a,b)=>a.price-b.price);
        }
        else if(currentFilter==="stock")
        {
        return [...filteredInventory].sort((a,b)=>a.stock-b.stock);
        }
        else {return [...filteredInventory].sort((a, b) => a.name.localeCompare(b.name));};
    }
    const sortedInventory=sortByFilter(filteredByDepartment);   

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
            {isLowStock
            ?sortedInventory?.map(({id,imageUrl,name,description,price,stock,supplier})=>{
                if(stock<=10) return (
                <li key={id} className={styles.list}>
                    <img className={styles.img} alt="product" src={imageUrl} width={150} height={150} />
                    <Link className={styles.name} to={`/products/${id}`}>{name}</Link>
                    <p className={styles.description}>{description}</p>
                    <span className={styles.price}>${price}</span>
                    <span className={styles.stock}>{stock}</span>
                    <p className={styles.supplier}>{supplier}</p>
                </li>
            )})
            :sortedInventory?.map(({id,imageUrl,name,description,price,stock,supplier})=>(
                <li key={id} className={styles.list}>
                    <img className={styles.img} alt="product" src={imageUrl} width={150} height={150} />
                    <Link className={styles.name} to={`/products/${id}`}>{name}</Link>
                    <p className={styles.description}>{description}</p>
                    <span className={styles.price}>${price}</span>
                    <span className={styles.stock}>{stock}</span>
                    <p className={styles.supplier}>{supplier}</p>
                </li>
            ))
        }
        </main>
    </div>
  )
}
