import React from "react";

export const Card = ({ children, className = "", noPadding = false }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm ${
        !noPadding ? "p-6" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
