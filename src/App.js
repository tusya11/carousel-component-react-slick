import { useState } from "react";
import Slider from "react-slick";
import { SampleNextArrow } from "./components/SampleNextArrow";
import { SamplePrevArrow } from "./components/SamplePrevArrow";
import "./App.css";
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image5.jpg";
import img6 from "./images/image6.jpg";
import img7 from "./images/image7.jpg";
import img8 from "./images/image8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const App = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container">
      <h2 className="header">Modern React Carousel</h2>
      <div className="slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
              key={index}
            >
              <img src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;
