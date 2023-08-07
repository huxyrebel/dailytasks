import React, { useState } from "react";

function Form() {
  const [formdata, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formdata.name);
  };

  return (
    <div>
      <form method="POST" action="#" onSubmit={handleSubmit}>
        <input
          type='text'
          name="name"
          onChange={handleInputChange}
          value={formdata.name}
          placeholder="First name"
        />
        <input
          type="password"
          value={formdata.password}
          onChange={handleInputChange}
          name="password"
          placeholder="Password"
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
