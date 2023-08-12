import React from 'react'
import styles from "./addProduct.module.css"

import { useData } from '../../context/StockContext'


export const AddProduct = () => {

    const {state,dispatch,addNewProduct,checkEmptyInputFields}=useData();
    const {input:{department,name,description,price,stock,sku,supplier,imageUrl}}=state;

    const changeHandler=(e,input)=>
    {
        dispatch({type:"INPUT_FIELDS",payload:e.target.value,inputField:input})
    }
  return (
    <div className={styles.container}>
        <h1>Add New Product</h1>
        <section className={styles.section}>
            <label htmlFor='department'>Department:</label>
            <select id="department" value={department} onChange={(e)=>changeHandler(e,"department")}>
                <option disabled selected value="">Select Department</option>
                <option value="kitchen">Kitchen</option>
                <option value="clothing">Clothing</option>
                <option value="toys">Toys</option>
            </select>
        </section>
        <section className={styles.section}>
            <label htmlFor='name'>Name:</label>
            <input id="name" value={name} onChange={(e)=>changeHandler(e,"name")}></input>
        </section>

        <section className={styles.section}>
            <label htmlFor='description'>Description:</label>
            <textarea id="description" value={description} onChange={(e)=>changeHandler(e,"description")}></textarea>
        </section>

        <section className={styles.section}>
            <label htmlFor='price'>Price:</label>
            <input id="price" type='number' placeholder={0} value={price} onChange={(e)=>dispatch({type:"INPUT_FIELDS",payload:Number(e.target.value),inputField:"price"})}></input>
        </section>

        <section className={styles.section}>
            <label htmlFor='stock'>Stock:</label>
            <input id="stock" type='number' value={stock} placeholder={0} onChange={(e)=>dispatch({type:"INPUT_FIELDS",payload:Number(e.target.value),inputField:"stock"})}></input>
        </section>

        <section className={styles.section}>
            <label htmlFor='sku'>SKU:</label>
            <input id="sku" value={sku} onChange={(e)=>changeHandler(e,"sku")}></input>
        </section>

        <section className={styles.section}>
            <label htmlFor='supplier'>Supplier:</label>
            <input id="supplier" value={supplier} onChange={(e)=>changeHandler(e,"supplier")}></input>
        </section>

        <section className={styles.section}>
            <label htmlFor='delivered' value={0}>Delivered:</label>
            <input id="delivered" type='number' value={0} disabled></input>
        </section>

        <section className={styles.section}>
            <label htmlFor='image'>Image URL:</label>
            <input id="image" value={imageUrl} onChange={(e)=>changeHandler(e,"imageUrl")}></input>
        </section>

        <button className={styles.button} disabled={checkEmptyInputFields()} onClick={()=>addNewProduct()}> Add Product </button>
    </div>
  )
}
