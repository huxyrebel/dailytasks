// Parent.js
import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [parentData, setParentData] = useState("Data from Parent");

  const handleParentClick = (newData) => {
    setParentData(newData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Parent Data: {parentData}</p>
      <Child parentData={parentData} onChildClick={handleParentClick} />
    </div>
  );
}

export default Parent;
