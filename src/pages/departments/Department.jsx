import React from 'react'
import styles from "./department.module.css";

import { useNavigate } from 'react-router-dom';

import { useData } from '../../context/StockContext';


export const Department = () => {

    const {dispatch}=useData();
    const navigate=useNavigate();

    const clickHandler=(department)=>
    {
        dispatch({type:"DEPARTMENT",payload:department})
        navigate("/products");
    }

  return (
    <div className={styles.container}>
        <article className={styles.card} onClick={()=>clickHandler("kitchen")} >
            <p>Kitchen</p>
        </article>

        <article className={styles.card} onClick={()=>clickHandler("clothing")} >
            <p>Clothing</p>
        </article>

        <article className={styles.card} onClick={()=>clickHandler("toys")} >
            <p>Toys</p>
        </article>

    </div>
  )
}
