import React, { useState } from 'react';
import { FormGroup, Input, Label, Button, Form } from 'reactstrap';
import './registration.css';
import Login from './login';

function Registration() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.name);
  };

  return (
    <div className="container">
      {submitted ? (
        // Render the login form after submission
        <Login />
      ) : (
        <div className='registration-container'>
          <div className="registration-header">Registration</div>
          <Form method='POST' onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter name"
                type="text"
                value={input.name}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Enter email"
                type="email"
                value={input.email}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Enter password"
                type="password"
                value={input.password}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="contact">Contact</Label>
              <Input
                id="contact"
                name="contact"
                placeholder="Enter contact"
                type="tel"
                value={input.contact}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button className='submit-button'>Submit</Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default Registration;
