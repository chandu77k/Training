import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import  Form  from 'react-bootstrap/Form';
import '../App.css';
import '../css/NavBar.css';
import logo from '../assets/flowerAuraLogo.svg'
import track from '../assets/navbar-icons/track.png'
import cart from '../assets/navbar-icons/cart.png'
import gift from '../assets/navbar-icons/gift.png'
import more from '../assets/navbar-icons/more.png'
import profile from '../assets/navbar-icons/profile.png'
import edit from '../assets/navbar-icons/edit.svg'
function NavBar1() {
  return (
    <>
    <Navbar className="navbar">
      <Container fluid className='navbar-container'>
        <Navbar.Brand className="brand-logo" href='/'>
          <img
            src={logo}
            width="250"
            height="50"
            className="d-inline-block align-top"
            alt="Aura Logo"
          />
        </Navbar.Brand>
        <div className='delivery'>
          <div className='deliverTo'>
            🇮🇳 Delivery To ?
          </div>
          <div className='edit-image'>
            <img src={edit} alt="" />
          </div>
        </div>
        <div className='searchbar'>
        <Form className="d-flex ms-3" style={{ flex: 1 }}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ width: '350px' }}
          />
        </Form>
        </div>


        <div className='allIcons'>
        <div className='icon'>
        <img
          src={track}
          width="30"
          height="30"
          className="d-inline-block align-center"
          alt="Delivery"
        />
          <p>Track</p>
        </div>
        <div className='icon'>
        <img
          src={cart}
          width="30"
          height="30"
          className="d-inline-block align-center"
          alt="Delivery"
        />
          <p>Gift</p>
        </div>
        <div className='icon'>
        <img
          src={gift}
          width="30"
          height="30"
          className="d-inline-block align-center"
          alt="Delivery"
        />
          <p>Cart</p>
        </div>
        <div className='icon'>
        <img
          src={profile}
          width="30"
          height="30"
          className="d-inline-block align-center"
          alt="Delivery"
        />
          <p>Sign In</p>
        </div>
        <div className='icon'>
        <img
          src={more}
          width="30"
          height="30"
          className="d-inline-block align-center"
          alt="Delivery"
        />
          <p>More</p>
        </div>
        </div>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar1;
