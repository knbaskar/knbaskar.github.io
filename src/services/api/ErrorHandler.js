import React from "react";

const ErrorHandler = ({ title, message }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{message}</div>
    </div>
  )
};

export default ErrorHandler;
