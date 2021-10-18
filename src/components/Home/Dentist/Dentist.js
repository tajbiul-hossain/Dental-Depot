import React from "react";
import "./Dentist.css";
const Dentist = ({ dentist }) => {
  const { name, img, expertise } = dentist;
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <figure className="dentist-card font-link">
        <img alt="" src={img} />
        <figcaption>
          <h3>{name}</h3>
          <p>{expertise}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Dentist;
