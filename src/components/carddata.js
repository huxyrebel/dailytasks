import React, { useEffect, useState } from 'react';
import "./carddata.css"
function CardData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="card-container">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
            <p className="card-text">{product.description}</p>
        
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardData;
