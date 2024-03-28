"use client";
import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://strapi-store-server.onrender.com/api/products?featured=true');
      const data = await response.json();
      setProducts(data.data);
    };

    fetchData();
  }, []);

  const handleProductClick = (productId) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="flex gap-4 justify-center">
      {products.map((product) => (
        <div key={product.id} className="w-80 rounded-lg" onClick={() => handleProductClick(product.id)}>
          <img width={300} height={200} src={product.attributes.image} alt={product.attributes.title} />
          <div>
          <h3>{product.attributes.title}</h3>
          <p>{product.attributes.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;