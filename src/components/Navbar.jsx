import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={` ${scrolled ? "nav shadow-sm" : "bg-transparent"} transition-all duration-300 `}
      >
        <Container>
          {/* Brand / Logo */}
          <Navbar.Brand href="#" className="fw-bold text-primary fs-4">
            <img src={scrolled ? '../image/logo.png' : '../image/loco.png'}  alt="Logo" style={{ height: "60px" }} />
          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

          {/* Offcanvas Menu */}
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"  className={` ${scrolled ? "bg-transparent" : "nav"} transition-all duration-300 `} // 👉 Right Side Offcanvas
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className="fw-bold text-primary">
             <img src="../image/logo.png" alt="Logo" style={{ height: "60px" }} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="border-rounded" >
              <Nav className="ms-auto text-center">
                <a href="/" className="nav-link fw-bold text-white mx-2">
                  Home
                </a>
                <a href="#about" className="nav-link fw-bold text-white mx-2">
                  About
                </a>
                <a href="#Product" className="nav-link fw-bold text-white mx-2">
                  Product
                </a>
                <a href="#contact" className="nav-link fw-bold text-white mx-2">
                  Contact
                </a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
