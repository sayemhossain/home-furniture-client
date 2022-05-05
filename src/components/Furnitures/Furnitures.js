import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Furniture from "../Furniture/Furniture";
import "./Furnitures.css";

const Furnitures = () => {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/furnitures")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, []);
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

export default Furnitures;
