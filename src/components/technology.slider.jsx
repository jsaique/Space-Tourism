import React from "react";
// Img
import img_0 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import img_1 from "../assets/technology/image-spaceport-portrait.jpg";
import img_2 from "../assets/technology/image-space-capsule-portrait.jpg";
import img_3 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import img_4 from "../assets/technology/image-spaceport-landscape.jpg";
import img_5 from "../assets/technology/image-space-capsule-landscape.jpg";

const SliderComponent = ({ current, index, setItem }) => {
  const imgIndex = (index) => {
    if (index === 0) {
      return img_0;
    } else if (index === 1) {
      return img_1;
    } else if (index === 2) {
      return img_2;
    } else {
      return false;
    }
  };
  const imgIndexResponsive = (index) => {
    if (index === 0) {
      return img_3;
    } else if (index === 1) {
      return img_4;
    } else if (index === 2) {
      return img_5;
    } else {
      return false;
    }
  };
  return (
    <section className="technology-wrapper">
      <div className="technology-header">
        <h1>
          <span>03</span> Space launch 101
        </h1>
      </div>
      <div className="technology-body">
        <div className="tech-img">
          <img
            src={imgIndex(index)}
            alt="technology image"
            className="desktop"
          />
          <img
            src={imgIndexResponsive(index)}
            alt="technology image"
            className="tablet"
          />
        </div>
        <div className="control-slider">
          <button
            onClick={() => setItem(0)}
            style={
              index === 0
                ? { backgroundColor: "#fff", color: "#000" }
                : { backgroundColor: "transparent" }
            }
          >
            1
          </button>
          <button
            onClick={() => setItem(1)}
            style={
              index === 1
                ? { backgroundColor: "#fff", color: "#000" }
                : { backgroundColor: "transparent" }
            }
          >
            2
          </button>
          <button
            onClick={() => setItem(2)}
            style={
              index === 2
                ? { backgroundColor: "#fff", color: "#000" }
                : { backgroundColor: "transparent" }
            }
          >
            3
          </button>
        </div>
        {current.map((item) => (
          <div className="tech-info" key={index}>
            <span>T H E &nbsp;&nbsp;&nbsp;T E R M I N O L O G Y . . .</span>
            <h2>{item.name.toUpperCase()}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SliderComponent;
