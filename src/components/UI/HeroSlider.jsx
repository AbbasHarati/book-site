import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/slider/slider-1.jpg';
import img2 from '../../assets/images/slider/slider-2.jpg';
import img3 from '../../assets/images/slider/slider-3.jpg';

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  return (
        <Carousel interval={3000}>
          <Carousel.Item>
            <img
              className=" w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>مرجع کامل دانلود کتاب دندانپزشکی</h3>
              <p>دانلود رایگان تمام کتاب های دندانپزشکی</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={img2}

              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    

  );
}

export default HeroSlider;
