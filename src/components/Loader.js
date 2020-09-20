import React from "react";

const Loader = () => {
  return (
    <div className="animation-container">
      <div className="boom-container">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape triangle big yellow"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
    </div>
  );
};

export default Loader;
