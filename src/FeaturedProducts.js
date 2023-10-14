import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('https://shoppingapiacme.herokuapp.com/shopping')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
        <div>
          <h1>Featured Products</h1>
          <div className='item-container'>
            {products.map((product) => (
              <div className='card'>
              </div>
            ))}
          </div>
        </div>
      
  
  );
};
export default FeaturedProducts;