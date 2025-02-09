import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#pricing">TV shows</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar