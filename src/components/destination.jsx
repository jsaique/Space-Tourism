import React, { useState, useEffect } from "react";
//Glide
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";
//Imgs
import img_0 from "../assets/destination/image-moon.png";
import img_1 from "../assets/destination/image-mars.png";
import img_2 from "../assets/destination/image-europa.png";
import img_3 from "../assets/destination/image-titan.png";
//Icon
import LoadingImg from "../assets/shared/loading.png";

const DestinationComponent = ({ data }) => {
  const [destinations, setDestination] = useState(null);
  let glide;
  useEffect(() => {
    setData();
    glide = new Glide(".glide", {
      perView: 1,
      type: "carousel",
    });
  }, []);
  const setData = async () => {
    data
      .then((res) => setDestination(res.destinations))
      .then(() => glide.mount());
  };
  //Switch case
  // const imgIndex = (index) => {
  //   switch (index) {
  //     case 0:
  //       return img_0;
  //     case 1:
  //       return img_1;
  //     case 2:
  //       return img_2;
  //     case 3:
  //       return img_3;
  //     default:
  //       console.log("error loading images");
  //   }
  //if else for readablility
  const imgIndex = (index) => {
    if (index === 0) {
      return img_0;
    } else if (index === 1) {
      return img_1;
    } else if (index === 2) {
      return img_2;
    } else if (index === 3) {
      return img_3;
    } else {
      return false;
    }
  };

  return (
    <section className="destination wrapper">
      {destinations ? (
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {destinations.map((item, index) => (
                <li className="glide__slide" key={index}>
                  <div className="content destin">
                    <div className="title-img">
                      <h1>
                        <span> 0 1 </span> P I C K &nbsp;&nbsp;&nbsp; Y O U R
                        &nbsp;&nbsp;&nbsp; D E S T I N A T I O N
                      </h1>
                      <img src={imgIndex(index)} alt={item.name} />
                    </div>
                    <div className="wrapper-slider">
                      <div
                        className="header-slider"
                        data-glide-el="controls[nav]"
                      >
                        <button data-glide-dir="=0">M O O N</button>
                        <button data-glide-dir="=1">M A R S</button>
                        <button data-glide-dir="=2">E U R O P A</button>
                        <button data-glide-dir="=3">T I T A N</button>
                      </div>
                      <div className="slider">
                        <div className="content-slider">
                          <h2>{item.name.toUpperCase()}</h2>
                          <p>{item.description}</p>
                          <hr />
                          <div className="info-slider">
                            <div className="info-box">
                              <h2>AVG. DISTANCE</h2>
                              <span>{item.distance.toUpperCase()}</span>
                            </div>
                            <div className="info-box">
                              <h2>EST. TRAVEL TIME</h2>
                              <span>{item.travel.toUpperCase()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <span className="loading">
          <img src={LoadingImg} alt="" />
        </span>
      )}
    </section>
  );
};

export default DestinationComponent;
