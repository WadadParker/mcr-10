import React from 'react'
import styles from "./filterBar.module.css";
import { useNavigate } from 'react-router-dom';

export const FilterBar = () => {
  const navigate=useNavigate();
  return (
    <div className={styles.container}>
        <h3>Products</h3>
        <select>
            <option value="All">All</option>
            <option value="kitchen">Kitchen</option>
            <option value="clothing">Clothing</option>
            <option value="toys">Toys</option>
        </select>
        <span>
        <input id="low-stock" type="checkbox"></input>
        <label htmlFor='low-stock'>Low Stock Items</label>
        </span>

        <select>
            <option disabled>Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
        </select>

        <button className={styles.button} onClick={()=>navigate("/add-new-product")}>New</button>
    </div>
  )
}
