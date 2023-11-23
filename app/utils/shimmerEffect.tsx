import React from "react";

function Shimmer() {
  const divs = Array.from({ length: 20 }, (_, index) => (
    <div
      key={index}
      className="w-48 h-64 bg-gray rounded-lg transition-transform transform hover:scale-105 shadow-card"
    >
      <p className="text-xl text-green">Kanwar Singh</p>
    </div>
  ));

  return <div>{divs}</div>;
}

export default Shimmer;
