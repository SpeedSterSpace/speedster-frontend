import Image from "next/image";
import React from "react";

const Partners = () => {
  const partners = [
    "/others/image 2.png",
    "/others/image 5.png",
    "/others/image 4.png",
    "/others/image 3.png",
  ];

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto md:my-[8rem] my-[5rem]">
      <h2 className="text-[2rem] mb-[2rem] xl:text-[4rem] text-center leading-none font-bold">
        Our partners
      </h2>
      <div className="flex flex-wrap gap-[2%] justify-center">
        {partners.map((part, index) => (
          <Image
            className="w-[48%] md:w-[23%]"
            key={index}
            src={part}
            alt="image"
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
