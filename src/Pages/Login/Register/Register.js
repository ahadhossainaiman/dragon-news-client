import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvuder/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password, name);
    createUser(email,password)
    .then((result)=>{
      const user = result.user;
      event.target.reset();
      navigate('/')
      console.log(user);
     

    })
    .catch((error)=>{
      console.error(error);
    })
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Text className="text-muted">
        Already Have a Account? <Link to="/login">SignIn</Link>
      </Form.Text>
      <br></br>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
