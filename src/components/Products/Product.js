import React from "react";
import styles from "./styles.module.css";

const Product = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <div className={styles.card_header}>
            <p>{product.title}</p>
          </div>
          <div className={styles.card_center}>
            <img src="" alt="" />
          </div>
          <div className={styles.card_footer}>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
