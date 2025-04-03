import React from "react";
import { Carousel, Container } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

import image1 from './assets/carousel/carousel1.webp';
import image2 from './assets/carousel/carousel2.webp';
import image3 from './assets/carousel/carousel3.webp';
import image4 from './assets/carousel/carousel4.webp';
import image5 from './assets/carousel/carousel5.webp';
import image6 from './assets/carousel/carousel6.webp';

const Carousell = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  const groupImages = (images, groupSize) => {
    const groups = [];
    for (let i = 0; i < images.length; i += groupSize) {
      groups.push(images.slice(i, i + groupSize));
    }
    return groups;
  };

  const groupedImages = groupImages(images, 3);

  return (
    <Container className="mt-4">
      <Carousel indicators={true} interval={3000}>
        {groupedImages.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-start">
              {group.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Slide ${index}`}
                  className="carousel-image rounded"
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Carousell;
