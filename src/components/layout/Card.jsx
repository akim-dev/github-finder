import React from "react";

function Card({ children }) {
  return (
    <div className="max-w-sm bg-white shadow-md border border-gray-200 rounded-lg">
      {children}
    </div>
  );
}

export default Card;
