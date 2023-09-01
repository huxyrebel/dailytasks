import React, { useEffect, useState } from 'react';
import './carddata.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="container">
      <button onClick={toggleCart}>Cart</button>
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      {showCart && (
        <div className="cart">
          <h2>Cart Items</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductList;
