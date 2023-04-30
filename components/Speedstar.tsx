import Image from "next/image";
import React from "react";

const Speedstar = () => {
  return (
    <div>
      <div className="w-11/12 xl:w-3/4 mx-auto flex md:flex-row gap-y-[3rem] flex-col-reverse items-start md:my-[10rem] mt-[8rem]">
        <div className="w-full md:w-[50%] md:sticky md:top-[5.5rem] shrink-0 ">
          <h1 className="text-[2rem] xl:text-[4rem] leading-none mb-5 lg:mb-8 font-bold">
            {" "}
            About <span className="block">Speedster</span>
          </h1>
          <p className="w-11/12">
            Welcome to Speedster, the ultimate space exploration game. In
            Speedster, you take on the role of a daring pilot, flying through
            the cosmos in search of adventure and discovery. With a sleek,
            high-speed spacecraft at your command, you will explore strange new
            worlds, encounter alien civilizations, and uncover the secrets of
            the universe. So buckle up, engage your thrusters, and get ready for
            the adventure of a lifetime in Speedster!
          </p>
          <button className="h-[3.5rem] w-[10rem] rounded-xl bg-gradient-to-r from-secondary mt-[2rem] md:mt-[3rem] to-primary text-[#190C33]">
            Play Now
          </button>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            src="/assets/toon.png"
            className="w-full "
            alt="image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Speedstar;
