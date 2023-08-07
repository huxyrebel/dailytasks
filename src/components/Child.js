// Child.js
import React, { useState } from "react";

function Child(props) {
  const [childData, setChildData] = useState("Data from Child");

  const handleChildClick = () => {
    const newData = "Updated Data from Child";
    setChildData(newData);
    props.onChildClick(newData);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Received from Parent: {props.parentData}</p>
      <p>Child Data: {childData}</p>
      <button onClick={handleChildClick}>Update Parent Data</button>
    </div>
  );
}

export default Child;
