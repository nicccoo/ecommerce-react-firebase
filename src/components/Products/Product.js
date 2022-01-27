import React from "react";
import styles from "./styles.module.css";

const Product = ({ products }) => {
  return (
    <div className={styles.container}>
      {products?.length ? (
        products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.card_image}>
              <img
                src="https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/2/0/200010156990001-1_1.jpg"
                alt=""
              />
            </div>
            <div className={styles.card_details}>
              <div className={styles.product_details}>
                <p className={styles.product_category}>{product.category}</p>
                <p className={styles.product_title}>{product.title}</p>
                <p className={styles.product_price}>${product.price}</p>
              </div> 
              <div className={styles.card_buttons}>              
              <button className={styles.card_button}>COMPRAR</button>
              <p>🛒</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
};

export default Product;
