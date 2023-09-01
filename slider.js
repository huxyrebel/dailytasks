import React, { Component } from "react";
import Slider from "react-slick";
import "../components/slider.css";

export default class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://www.pchotels.com/uploads/images/1_0164457400810944.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="https://www.pchotels.com/uploads/images/1_0164457400810944.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="https://www.pchotels.com/uploads/images/1_01574152548.jpg" alt="Slide 3" />
          </div>
          <div>
            <img src="https://www.pchotels.com/uploads/images/1_01565072538.jpg" alt="Slide 4" />
          </div>
          <div>
            <img src="https://www.pchotels.com/uploads/images/1_01565072529.jpg" alt="Slide 5" />
          </div>
        </Slider>
      </div>
    );
  }
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      Previous
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      Next
    </div>
  );
}
