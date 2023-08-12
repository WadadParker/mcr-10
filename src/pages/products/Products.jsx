import React from 'react'
import styles from "./products.module.css";

import { FilterBar } from '../../components/filterBar/FilterBar';

export const Products = () => {
  return (
    <div className={styles[`page-container`]}>
        <FilterBar />
    </div>
  )
}
