import React from "react";
import useFurniture from "../../hooks/useFurniture";

const Manage = ({ furniture }) => {
  const { _id, name, img, price, description, quantity, supplierName } =
    furniture;
  const [furnitures, setFurnitures] = useFurniture();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/furnitures/${id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          const remaining = furnitures.filter(
            (furniture) => furniture._id !== id
          );
          setFurnitures(remaining);
        });
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-2">
          <img className="img-fluid w-25" src={img} alt="" />
        </div>
        <div className="col-lg-2">{name}</div>
        <div className="col-lg-2">
          <p>
            quantity: <span className="fw-bold">{quantity}</span>
          </p>
        </div>
        <div className="col-lg-2">
          {" "}
          <p>
            price: <span className="fw-bold">${price}</span>
          </p>
        </div>
        <div className="col-lg-2">
          <button className="btn btn-outline-success">Update</button>
        </div>
        <div className="col-lg-2">
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Manage;
