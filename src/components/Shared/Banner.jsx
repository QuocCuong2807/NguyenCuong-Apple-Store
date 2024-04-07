import React from "react";

function Banner() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="true"
      
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require('../../img/slider1.png')} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={require('../../img/slider2.png')} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={require('../../img/slider3.png')} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
