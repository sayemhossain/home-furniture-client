import React from "react";
import useFurniture from "../../hooks/useFurniture";
import Furniture from "../Furniture/Furniture";
import "./Furnitures.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Furnitures = () => {
  const [furnitures, useFurnitures] = useFurniture();
  const homeFurniture = furnitures.slice(0, 6);
  return (
    <div className="container my-5">
      <div className="text-center">
        <p className="mb-0 pb-0 sub-header">EXPLORe THE AWESOME</p>
        <h2>Featured Collections</h2>
        <p className="mb-5">Total Furniture: {homeFurniture.length}</p>
      </div>

      <div className="furniture-container">
        {homeFurniture.map((furniture) => (
          <Furniture key={furniture._id} furniture={furniture}></Furniture>
        ))}
      </div>
      <Link className="seeMore-link" to="/allFurniture">
        <p className="text-end mt-2 ">
          See more <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </Link>
    </div>
  );
};

export default Furnitures;
