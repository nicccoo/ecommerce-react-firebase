import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const newProducts = await getDocs(collection(db, "products"));
    const prod = [];
    newProducts.forEach((doc) => {
      prod.push({ ...doc.data(), id: doc.id });
      setProducts(prod);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <h1>{product.category}</h1>
            <h1>{product.price}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Product;
