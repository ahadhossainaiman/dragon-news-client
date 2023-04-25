import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvuder/AuthProvider";
import { FaUser } from "react-icons/fa";
import { Button, Image } from "react-bootstrap";

export default function Header() {
  const { user,LogOut } = useContext(AuthContext);
  const handleLogOut = ()=>{
    LogOut()
    .then(()=>{})
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <span className="me-3 my-2">{user?.displayName}</span>
                  <Button onClick={handleLogOut} variant="dark">SignOut</Button>
                </>
              ) : (
                <>
                 <Link to='/login'> <Button className="me-3" variant="primary">
                    SignIn
                  </Button>
                  </Link>
                  <Link to='/register'>
                  <Button variant="info">Register</Button>
                  </Link>
                </>
              )}
            </>
            <Link  to="/profile">
            {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser className={user?.displayName  ? 'd-block' :'d-none'}></FaUser>
              )}
            </Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
