// Cart.js
import React from 'react';

function Cart({ cart }) {
  return (
    <div className="container">
      <h2>Cart Items</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
