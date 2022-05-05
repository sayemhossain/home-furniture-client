import React from "react";
import useFurniture from "../../hooks/useFurniture";
import Furniture from "../Furniture/Furniture";

const AllFurniture = () => {
  const [furnitures, setFurnitures] = useFurniture();
  return (
    <div className="container my-5">
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
    </div>
  );
};

export default AllFurniture;
