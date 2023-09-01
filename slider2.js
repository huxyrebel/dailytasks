import React, { Component } from "react";
import Slider from "react-slick";
import "./slider2.css"

export default class Slide2 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };

    return (
      <div className="slider2-container">
        <div className="slider2-heading d-flex justify-content-center align-text-center mt-4">
            <h1>Our hotels</h1>
        </div>
        <Slider {...settings}>
          <div>
            <img src="https://www.pchotels.com/uploads/village/thumb/721d4a47014a77712636d4e14f91e0491576134049.jpg" alt="Slide 1"
                    style={{ width: '100%', height: '300px' }} // Adjust the width and height as needed

            />
          </div>
          <div>
            <img src="https://www.pchotels.com/uploads/village/thumb/764cbe1d7cbec8d13767b3d6f4cd7e771565073572.jpg" alt="Slide 2" 
                style={{ width: '100%', height: '300px' }} // Adjust the width and height as needed

            />
          </div>
          <div>
            <img src="https://www.pchotels.com/uploads/village/thumb/764cbe1d7cbec8d13767b3d6f4cd7e771565073572.jpg" alt="Slide 3"
                style={{ width: '100%', height: '300px' }} // Adjust the width and height as needed

            />
          </div>
          <div>
            <img src="https://www.pchotels.com/uploads/village/thumb/8d9eac7045dc70a7c55375c37e31009f1566569929.jpg" alt="Slide 4"
                style={{ width: '100%', height: '300px' }} // Adjust the width and height as needed

            />
          </div>
          <div>
            <img src="https://www.pchotels.com/uploads/village/thumb/05be5acee1d134c63f49abf4e0cddf371565073535.jpg" alt="Slide 5"
                style={{ width: '100%', height: '300px' }} // Adjust the width and height as needed

            />
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
