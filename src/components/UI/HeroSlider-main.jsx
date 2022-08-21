import React from "react";

import Slider from "react-slick";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    speed: 1500,
    autoplaySpeed: 4000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
          <div className="slider__content ">
            <h1>دانلود کتاب های دندانپزشکی</h1>
          </div>
      </div>

      <div className="slider__item slider__item-02 mt0">
          <div className="slider__content ">
            <h1>دانلود مقالات معتبر دندانپزشکی</h1>
          </div>
      </div>

      <div className="slider__item slider__item-03 mt0">
          <div className="slider__content ">
            <h1>خرید و فروش تجهیزات دندانپزشکی</h1>
          </div>
      </div>
    </Slider>
  );
};

export default HeroSlider;
