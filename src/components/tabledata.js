import React, { useEffect, useState } from 'react';
import './tabledata.css';

function Tabledata() {

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //yahan hum data fetch kar rahay hain
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  //yay searchhandle input ke value may para hay
  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };
// search function hay jismay hum aik variable may phelay saaray products lay rahay hainphir .filter kar kay
//aik single product par function perform kar rahay hain yay search karay ga title kay through in table
//to lowercase agar koi upper may bhi likhta hay to usay lower may convert kar day ga
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-container">
      <div className="Search">
        <input
          type="text"
          placeholder="Enter product name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="Submit">Search</button>
      
      </div>
      
      {filteredProducts.map(product => (
      //product ke detail trafer ho rahi hay filtered product may
      <table className="table" key={product.id}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{product.id}</th>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default Tabledata;
