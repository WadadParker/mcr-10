import React, { useEffect } from 'react'
import styles from "./productPage.module.css"

import { useData } from '../../context/StockContext'
import { useParams } from 'react-router-dom';

export const ProductPage = () => {

    const {state:{inventory}}=useData();

    const {productID}=useParams();

    const foundProduct=inventory.find(({id})=>id==productID);
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);    

  return (
    <div className={styles.container}>
        <h1>{foundProduct?.name}</h1>
        <img alt="product" src={foundProduct?.imageUrl} width={450} height={500} />
        <p>Price: ${foundProduct?.price}</p>
        <p>Stock: {foundProduct?.stock}</p>
        <p>Supplier: {foundProduct?.supplier}</p>
        <p>Department: {foundProduct?.department}</p>
        <p>SKU: {foundProduct?.sku}</p>
        <p>Delivered:{foundProduct?.delivered}</p>
        <p>Description: {foundProduct?.description}</p>
    </div>
  )
}
// image, price,stock,supplier,department,SKU,Delivered,Description