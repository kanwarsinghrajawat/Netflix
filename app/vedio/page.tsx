import React from "react";

const Vedio = () => {
  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-screen aspect-video h-full"
        src={`https://www.youtube.com/embed/MAZuGdi32bk?autoplay=1&mute=1&loop=1&playlist=MAZuGdi32bk`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Vedio;
