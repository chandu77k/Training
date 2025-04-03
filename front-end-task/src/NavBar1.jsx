import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import fnplogo from './assets/header/fnp_logo.svg';
import Form from 'react-bootstrap/Form';
import delivery from './assets/header/delivery.svg';
import location from './assets/header/location.svg';
import inr from './assets/header/inr.svg';
import corporate from './assets/header/corporate.svg';
import cart from './assets/header/cart2.svg';
import guest from './assets/header/guest.svg';
import more from './assets/header/more.svg';
import './App.css';

function NavBar1() {
  return (
    <Navbar className="bg-body-tertiary navbar">
      <Container fluid>
        <Navbar.Brand className="brand-logo">
          <img
            src={fnplogo}
            width="70"
            height="30"
            className="d-inline-block align-top"
            alt="FNP Logo"
          />
        </Navbar.Brand>
        <div className='locc'>
        <div className='both-loc'>
        <img
          src={location}
          width="25"
          height="45"
          className="d-inline-block align-top"
          alt="Location"
        />
        </div>
        <div className="loc-modal">
          <h6>Where to deliver? <br /><p style={{color:'red'}}>Location missing</p></h6>
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
        <div className='float'>
        <div className='icons'>
        <img
          src={delivery}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Delivery"
        />
          <p>Same Day</p>
        </div>
        <div className='icons'>
        <img
          src={inr}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="INR"
        />
        <p>INR</p>
        </div>
        <div className='icons'>
        <img
          src={corporate}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Corporate"
        />
        <p>Corporate</p>
        </div>
        <div className='icons'>
        <img
          src={cart}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Cart"
        />
        <p>Cart</p>
        </div>
        <div className='icons'>
        <img
          src={guest}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Guest"
        />
        <p>Guest</p>
        </div>
        <div className='icons'>
        <img
          src={more}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="More"
        />
        <p>More</p>
        </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar1;
