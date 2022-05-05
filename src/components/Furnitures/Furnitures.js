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
      <h3>Total furniture: {furnitures.length}</h3>
      <div className="furniture-container">
        {furnitures.map((furniture) => (
          <Furniture key={furniture._id} furniture={furniture}></Furniture>
        ))}
      </div>
    </div>
  );
};

export default Furnitures;
