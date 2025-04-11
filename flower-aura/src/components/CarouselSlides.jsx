import { useState } from 'react';
import "../App.css"
import "../css/Carousel.css"
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../assets/carousel/carousel1.jpg';
import CarouselImage2 from '../assets/carousel/carousel2.jpg';
import CarouselImage3 from '../assets/carousel/carousel3.jpg';
import CarouselImage4 from '../assets/carousel/carousel4.jpg';
function CoverImagesCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img className="d-block carousel-size" src={CarouselImage4} alt="First slide"  />
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block carousel-size" src={CarouselImage2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block carousel-size" src={CarouselImage3} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block carousel-size" src={CarouselImage1} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CoverImagesCarousel;