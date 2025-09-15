import React from "react";

export const Logo = ({ size = "medium", className = "" }) => {
  const sizes = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-12 h-12",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`bg-blue-600 rounded-lg p-2 ${sizes[size]}`}>
        <svg
          className="w-full h-full text-white"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className="text-xl font-semibold text-gray-900">Xenityhealth</span>
    </div>
  );
};
