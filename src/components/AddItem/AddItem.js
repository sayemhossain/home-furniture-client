import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "./AddItem.css";
import "react-toastify/dist/ReactToastify.css";

const AddItem = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const supplierName = e.target.supplierName.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const img = e.target.img.value;
    const description = e.target.description.value;

    const data = { name, supplierName, price, quantity, img, description };
    const url = `http://localhost:5000/furnitures`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    e.target.reset();
    toast("Item added successfully!");
  };
  return (
    <div className="add-container">
      <div className="container py-5">
        <div className="w-50 mx-auto login-form">
          <h4 className="text-center text-uppercase my-4 login-header">
            Add Items
          </h4>
          <form action="" onSubmit={handleAddItem}>
            <input
              className="form-control"
              type="text"
              name="name"
              id=""
              placeholder="Enter furniture name"
              required
            ></input>
            <input
              className="form-control mt-4"
              type="text"
              name="supplierName"
              id=""
              placeholder="Supplier name"
              required
            />
            <input
              className="form-control mt-4"
              type="number"
              name="price"
              id=""
              placeholder="Enter price"
              required
            />
            <input
              className="form-control mt-4"
              type="number"
              name="quantity"
              id=""
              placeholder="Enter quantity"
              required
            />
            <input
              className="form-control mt-4"
              type="text"
              name="img"
              id=""
              placeholder="Enter Img url"
              required
            />
            <textarea
              className="form-control mt-4"
              name="description"
              id=""
              cols="30"
              rows="3"
              placeholder="Enter short description"
              required
            ></textarea>
            <div className="text-center mt-4">
              <input
                className="w-100 login-btn py-2 fw-bold rounded"
                type="submit"
                value="Add Item"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddItem;
