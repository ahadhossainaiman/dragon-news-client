import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandSlider from "../BrandSlider/BrandSlider";
import { AuthContext } from "../../context/AuthProvuder/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";



export default function RightSideNav() {
  const {googleSignIn} = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = ()=>{
     googleSignIn(googleAuthProvider)
     .then((result)=>{
      const user = result.user;
      console.log(user);
     })
     .catch((error)=>{
      console.error(error);
     })
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Sign With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Signin With Github
        </Button>
      </ButtonGroup>
      <div className="mt-3">
        <h6>Find Us On</h6>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaYoutube></FaYoutube> Toutube
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp></FaWhatsapp> WhatsApp
          </ListGroup.Item>
        </ListGroup>
      </div>
      <BrandSlider></BrandSlider>
    </div>
  );
}
