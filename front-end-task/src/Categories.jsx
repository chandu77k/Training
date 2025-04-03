import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './App.css';
import birthday from "./assets/categories/birthday.webp"
import bike from "./assets/categories/bike.webp"
import anniversary from "./assets/categories/anniversary.webp"
import cakes from "./assets/categories/cakes.webp"
import flowers from "./assets/categories/flowers.webp"
import hatke from "./assets/categories/hatke.webp"
import kid from "./assets/categories/kidsCorner.jpg"
import luxe from "./assets/categories/luxe.webp"
import navratri from "./assets/categories/navratri.webp"
const Categories = () => {
  return (
    <Container className="mt-4">
      <Row className="category-row">
        <Col className="category-item" xs={1}>
          <Image
            src={birthday}
            alt="Birthday"
            rounded
            className="category-img"
          />
          <span>Birthday</span>
        </Col>
        <Col className="category-item" xs={1}>
          <Image
            src={bike}
            alt="2-Hour Delivery"
            rounded
            className="category-img"
          />
          <span>Delivery</span>
        </Col>
        <Col className="category-item" xs={1}>
          <Image
            src={luxe}
            alt="FNP Luxe"
            rounded
            className="category-img"
          />
          <span>FNP Luxe</span>
        </Col>
        <Col className="category-item" xs={1}>
          <Image
            src={hatke}
            alt="Hatke Gifts"
            rounded
            className="category-img"
          />
          <span>Hatke Gifts</span>
        </Col>
        <Col className="category-item" xs={1}>
          <Image
            src={navratri}
            alt="Navratri"
            rounded
            className="category-img"
          />
          <span>Navratri</span>
        </Col>
        <Col className="category-item" xs={1}>
          <Image
            src={anniversary}
            alt="Anniversary"
            rounded
            className="category-img"
          />
          <span>Anniversary</span>
        </Col>
        <Col className="category-item" xs={1}>
          <Image
            src={flowers}
            alt="Flowers"
            rounded
            className="category-img"
          />
          <span>Flowers</span>
        </Col>
        <Col className="category-item" xs={1}>
          <Image
            src={cakes}
            alt="Cakes"
            rounded
            className="category-img"
          />
          <span>Cakes</span>
        </Col>
        <Col className="category-item" xs={1}>
          <Image
            src={kid}
            alt="Kids Corner"
            rounded
            className="category-img"
          />
          <span>Kids Corner</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
