import React from "react";

const Alert = ({ message, type }) => {
  const alertClass = type === "success" ? "alert-success mt-2 rounded-pill ps-3" : "alert-danger mt-2 rounded-pill ps-3";
  return (
    <div className={alertClass} role="alert">
      {message}
    </div>
  );
};

export default Alert