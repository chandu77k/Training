import React from 'react';
import  Form  from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../App.css';
import '../css/NavBar.css';
import { NavbarText } from 'react-bootstrap';
import searchLogo from '../assets/logos/search-heart-fill.svg';

function NavBar() {
  return (
    <>
      <Navbar className="navbar">
        <Container fluid className='navbar-container'>
          <div className='searchbar' style={{ position: 'relative' }}>
            <img src={searchLogo} alt="search" className="search-icon" />
            <Form className="d-flex ms-3" style={{ flex: 1 }}>
              <Form.Control
                type="search"
                placeholder="What are you looking for ?"
                className="me-2 searchBar"
                aria-label="Search"
                style={{ width: '350px', paddingLeft: '40px' }}
              />
            </Form>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex-wrap">
              {["Explore", "Hire a Designer"].map((title, idx) => (
                <NavDropdown title={title} id={`nav-dropdown-${idx}`} key={idx}>
                  <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
                  <NavDropdown.Item href="#">Option 3</NavDropdown.Item>
                </NavDropdown>
              ))}
              <NavbarText className='navbar-text'>Find Jobs</NavbarText>
              <NavbarText className='navbar-text1'>Blogs</NavbarText>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Button variant="" className='signup-class'>Sign up</Button>
        <Button variant="dark" className='login-class'>Login</Button>
      </Navbar>
    </>
  );
}

export default NavBar;
