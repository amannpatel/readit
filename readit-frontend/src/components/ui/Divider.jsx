import React from "react";

export const Divider = ({ text, className = "" }) => {
  return (
    <div className={`relative my-6 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      {text && (
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-4 text-gray-500">{text}</span>
        </div>
      )}
    </div>
  );
};
