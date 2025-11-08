import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  return (
    <footer className="nav text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Brand */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <img src="../image/logo.png" style={{ height: "150px" }} alt="log" />
           
          </Col>

          {/* Links */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <a href="/shop" className="text-light text-decoration-none mx-2">Shop</a>
            <a href="/about" className="text-light text-decoration-none mx-2">About</a>
            <a href="/contact" className="text-light text-decoration-none mx-2">Contact</a>
          </Col>

          {/* Social Icons */}
          <Col md={4} className="text-center text-md-end">
            <a href="#" className="text-light mx-2 fs-5"><FaFacebookF /></a>
            <a href="#" className="text-light mx-2 fs-5"><FaInstagram /></a>
            <a href="#" className="text-light mx-2 fs-5"><FaTwitter /></a>
            <a href="#" className="text-light mx-2 fs-5"><FaYoutube /></a>
            <h5>Call: 015685688</h5>
          </Col>
          
           <small className="text-white text-center">© {new Date().getFullYear()} All rights reserved</small>
        </Row>
      </Container>
    </footer>
  );
};
