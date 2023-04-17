import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

export default function Main() {
  return (
    <div>
        <Header></Header>
      <Container>
        <Row>
          <Col lg='2' className="d-none d-lg-block">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg='7'>
            <Outlet></Outlet>
          </Col>
          <Col lg='3' className="d-none d-lg-block">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
