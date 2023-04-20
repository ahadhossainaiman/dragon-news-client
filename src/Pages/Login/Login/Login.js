import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvuder/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const [accepted,setAccepted] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        event.target.reset();
        if(user.emailVerified){
          navigate(from, { replace: true });
        }
        else{
          toast.error('Your email is not verified');
        }
       setAccepted(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleAccepted = (event) =>{
    setAccepted(event.target.checked)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Text className="text-muted">
        Don't Have any Account? <Link to="/register">Register</Link>
      </Form.Text>
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} type="checkbox" label="Accept"  />
      </Form.Group>
      <Button className="mt-3" variant="primary" type="submit" disabled={!accepted}>
        SignIn
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Login;
