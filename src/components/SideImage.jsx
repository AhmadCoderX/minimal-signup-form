import React from "react";
import clipArtImage from "../assets/Autumn-amico 1.png";

const SideImage = () => {
  return (
    <div className="hidden w-[50%] h-full md:flex items-center justify-center">
      <img src={clipArtImage} alt="Clip Art Image" className="w-[29vw] aspect-auto" />
    </div>
  );
};

export default SideImage;
