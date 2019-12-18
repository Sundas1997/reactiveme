import React from "react";
import "./iconCard.css";

const IconCard = (props) => {
  const {icon, heading, text, seq} = props;
  const classes= "div px-3 py-4 animated fadeInUp delay-"+seq+"s";
  return (
    <div className={classes}>
          <img className="mb-3" src={icon} alt="Icon"/>
          <h4>{heading}</h4>
          <p>
            {text}
          </p>
    </div> )
}

export default IconCard;
