import Image from "next/image";
import React from "react";

type content = {
  name: string;
  content: string;
  image: string;
  buttonName?: string;
};

const Grid = ({ name, content, image, buttonName }: content) => {
  return (
    <div className="w-full md:w-[48%] block xl:w-[32%] shrink-0">
      <Image
        src={image}
        className="w-full"
        width={200}
        height={200}
        alt="image"
      />
      <h3 className="font-bold text-[1.5rem] mt-5">{name}</h3>
      <p className="">{content}</p>
      <button className="py-4 mt-5 w-full bg-[#0a0a43] text-white">
        {buttonName ? buttonName : "Explore Now"}
      </button>
    </div>
  );
};

export default Grid;
