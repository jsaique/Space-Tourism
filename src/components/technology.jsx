import React, { useState, useEffect } from "react";
// Component child
import SliderComponent from "./technology.slider";
//Icon

const TechnologyComponent = ({ data }) => {
  const [technology, setTechnology] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const setItem = (i) => {
    const current = technology.filter((item, index) => index === i);
    setCurrentItem(current);
    setCurrentIndex(i);
  };
  useEffect(() => {
    setData();
  }, []);
  const setData = async () =>
    data.then((res) => {
      const current = res.technology.filter((item, index) => index === 0);
      setCurrentItem(current);
      setTechnology(res.technology);
    });
  return (
    <>
      {currentItem ? (
        <SliderComponent
          current={currentItem}
          index={currentIndex}
          setItem={setItem}
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default TechnologyComponent;
