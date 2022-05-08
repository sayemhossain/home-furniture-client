import React from "react";

const Loading = () => {
  return (
    <div style={{ minHeight: "90vh" }}>
      <div
        style={{ minHeight: "70vh" }}
        className="d-flex justify-content-center align-items-center "
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
