import arrow_left from "../images/arrow_left.png";
import arrow_right from "../images/arrow_right.png";
import React, { useState } from "react";

function Slider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const length = slides.length;
  if (length === 1) {
    return (
      <div className="slider">
        <img className="slider_img" src={slides} alt="vu-du-logement"></img>
      </div>
    );
  }

  return (
    <div className="slider">
      <div
        className="slider_content"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => {
          return (
            <div key={index} className="slider_item" style={{ width: "100%" }}>
              <div></div>
              <img className="slider_img" src={slide} alt="vu-du-logement" />
            </div>
          );
        })}
      </div>
      <button
        className="button_arrow arrow_left"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <img
          src={arrow_left}
          className="button_arrow-img"
          alt="flèche-gauche"
        />
      </button>
      <p className="slider_count">
        {activeIndex + 1}/{slides.length}
      </p>
      <button
        className="button_arrow arrow_right"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <img
          src={arrow_right}
          className="button_arrow-img"
          alt="flèche-droite"
        />
      </button>
    </div>
  );
}

export default Slider;
