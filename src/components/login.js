import React, { useState } from 'react';
import { FormGroup, Input, Label, Button, Form } from 'reactstrap';
import './login.css'; // Create a new CSS file for login styles

function Login() {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', input.email);
    console.log('Password:', input.password);
  };

  return (
    <div className="container">
      <div className='login-container'>
        <div className="login-header">Login</div>
        <Form method='POST' onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter email"
              type="email"
              value={input.email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter password"
              type="password"
              value={input.password}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Button className='login-button'>Login</Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
