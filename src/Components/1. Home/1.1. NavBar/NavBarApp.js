import React from "react";
import "./NavBarApp.css";
import logo from "../../../images/Dulce Profumo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarApp = () => {
  return (
    <div>
      <Navbar expand="lg">
        
        <Container>
          
          <img classname="logo" src={logo} />
          <Navbar.Brand href="/">Dolce Profumo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="center">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="/">
                Perfumes
              </Link>
              <Link className="nav-link" to="/">
                Marcas
              </Link>
            </Nav>

            <Nav className="right_part">
              <Link className="nav-link" to="/signup">
                Iniciar sesión
              </Link>
              <Link className="nav-link" to="/contact">
                Contáctanos
              </Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarApp;
