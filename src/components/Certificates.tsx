import React from "react";
import image1 from "../assets/images/Certificates/AeronauticEngineering.png";
import image2 from "../assets/images/Certificates/YoungEngineer.png";
import image3 from "../assets/images/Certificates/EdusaveMerit.png";
import "../assets/styles/Project.scss";

function Certificates() {
  return (
    <div className="projects-container" id="certificates">
      <h1>Certificates</h1>
      <div className="projects-grid">
        <div className="project">
          <img src={image1} className="zoom" alt="thumbnail" width="100%" />
          <h2>Aeronautic Engineering Elective Module (2024)</h2>
        </div>
        <div className="project">
          <img src={image2} className="zoom" alt="thumbnail" width="100%" />
          <h2>Young Engineering Award (2023)</h2>
        </div>
        <div className="project">
          <img src={image3} className="zoom" alt="thumbnail" width="100%" />
          <h2>Edusave Merit Bursary (2022)</h2>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
