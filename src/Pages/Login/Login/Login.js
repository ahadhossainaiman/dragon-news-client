import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvuder/AuthProvider';

const Login = () => {
  const {signInUser} = useContext(AuthContext);
  const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          event.target.reset();
          navigate('/')
        })
        .catch(error=>{
          console.error(error);
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          Don't Have any Account? <Link to='/register'>Register</Link>
        </Form.Text><br></br>
        <Button className='mt-3' variant="primary" type="submit">
         SignIn
        </Button>
      </Form>
    );
};

export default Login;