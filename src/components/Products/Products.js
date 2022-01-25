import React, { useEffect, useState } from "react";
import db from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  
  
  const getData = async () => {
    const newProducts = await getDocs(collection(db, "products"));
    const prod = [];
    newProducts.forEach((doc) => {
      prod.push({ ...doc.data(), id: doc.id });      
    });
    setProducts(prod);
  };

  useEffect(() => {
    getData();
  }, []);
  

  return <Product products={products} />;
};

export default Products;
