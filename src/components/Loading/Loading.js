import React from "react";

const Loading = () => {
  return (
    <div style={{ minHeight: "90vh" }}>
      <div
        style={{ minHeight: "70vh" }}
        className="d-flex justify-content-center align-items-center "
      >
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
