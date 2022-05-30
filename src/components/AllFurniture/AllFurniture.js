import React from "react";
import useFurniture from "../../hooks/useFurniture";
import Furniture from "../Furniture/Furniture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AllFurniture = () => {
  const [furnitures, setFurnitures] = useFurniture();
  return (
    <div className="container my-5" style={{ minHeight: "100vh" }}>
      <div className="text-center">
        <p className="mb-0 pb-0 sub-header">EXPLORE THE AWESOME</p>
        <h2>Featured Collections</h2>
        <p className="mb-5">Total Furniture: {furnitures.length}</p>
      </div>
      <div className="furniture-container">
        {furnitures.map((furniture) => (
          <Furniture key={furniture._id} furniture={furniture}></Furniture>
        ))}
      </div>
      <div className="text-end my-5">
        <p>
          <Link className="inventory-link" to="/manage">
            Manage Inventory
            <FontAwesomeIcon className="ms-1" icon={faArrowRight} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AllFurniture;
