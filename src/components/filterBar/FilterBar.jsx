import React from 'react'
import styles from "./filterBar.module.css";
import { useNavigate } from 'react-router-dom';

import { useData } from '../../context/StockContext';

export const FilterBar = () => {
  const {state,dispatch}=useData();
  const {currentDepartment,isLowStock,currentFilter}=state;

  const navigate=useNavigate();
  return (
    <div className={styles.container}>
        <h3>Products</h3>
        <select value={currentDepartment} onChange={(e)=>dispatch({type:"DEPARTMENT",payload:e.target.value})}>
            <option value="All">All</option>
            <option value="kitchen">Kitchen</option>
            <option value="clothing">Clothing</option>
            <option value="toys">Toys</option>
        </select>
        <span>
        <input id="low-stock" type="checkbox" value={isLowStock} onChange={()=>dispatch({type:"TOGGLE_LOWSTOCK",payload:!isLowStock})}></input>
        <label htmlFor='low-stock'>Low Stock Items</label>
        </span>

        <select value={currentFilter} onChange={(e)=>dispatch({type:"FILTER",payload:e.target.value})}>
            <option disabled selected value="">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
        </select>

        <button className={styles.button} onClick={()=>navigate("/add-new-product")}>New</button>
    </div>
  )
}
