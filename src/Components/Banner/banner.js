import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="container banner-row">
        <div className="row banner-row">
          <div className="col-md-6 col-sm-12 align-self-center ">
            <h1 className="main-heading">Rancho</h1>
            <h2 className="animated fadeInDown">The Future Bike</h2>
            <p className="animated fadeInDown">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button type="button" className="btn btn-warning">View Biking Demos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
