import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import '../css/NavBar2.css';

function NavBar2() {
  return (
    <Navbar expand="lg" className='secondbar'>
      <Container fluid className='navbar2'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-wrap">
            {[
              "Express Delivery", "Flowers", "Cakes", "Birthday", "Anniversary",
              "Gifts", "Personalised", "Plants", "Combos", "International", "Occasions"
            ].map((title, idx) => (
              <NavDropdown title={title} id={`nav-dropdown-${idx}`} key={idx}>
                <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Option 3</NavDropdown.Item>
              </NavDropdown>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar2;
