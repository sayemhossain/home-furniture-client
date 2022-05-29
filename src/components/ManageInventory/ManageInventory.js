import React from "react";
import { Link } from "react-router-dom";
import useFurniture from "../../hooks/useFurniture";
import Furniture from "../Furniture/Furniture";
import Manage from "../Manage/Manage";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [furnitures, useFurnitures] = useFurniture();

  return (
    <div className="py-5 inventory-container" style={{ height: "100vh" }}>
      <div className="container ">
        <div className="text-center">
          <p className="mb-0 pb-0 sub-header">EXPLORE THE AWESOME</p>
          <h3 className="text-uppercase">Smart Management System</h3>
          <p className="mb-5">Total Furniture: {furnitures.length}</p>
          <div>
            <Link to="/additem">
              <button className="btn btn-primary px-3">Add Items</button>
            </Link>
          </div>
        </div>
        <div className="text-center pt-5">
          {furnitures.map((furniture) => (
            <Manage key={furniture._id} furniture={furniture}></Manage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
