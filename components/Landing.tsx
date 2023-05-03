import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="w-full bg-ground bg-cover h-full p-1 bg-center text-white">
      <div className="w-11/12 xl:w-3/4 mx-auto flex flex-col-reverse md:flex-row items-center mt-[4rem]">
        <div className="w-full md:w-[50%] shrink-0 ">
          <h1 className="text-[2rem] xl:text-[3.8rem] leading-none mb-8 font-bold">
            <Typewriter
              options={{
                strings: [
                  "The fate of the galaxy is in your hands",
                  "Become a hero among the stars",
                  "Discover new worlds with exotic creatures",
                  "Reveal untold treasures concealed in planets",
                  "Navigate through treacherous asteroids fields",
                  "Engage in epic battles with advanced weaponry",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 10,
              }}
            />
          </h1>
          <p>
            The universe is an endless expanse of wonder and possibility, with
            countless worlds and mysteries waiting to be discovered. From the
            depths of space to the far reaches of distant galaxies, the cosmos
            offers an infinite array of wonders and adventures for those brave
            enough to venture forth.
          </p>
          <button className="h-[3.5rem] w-[10rem] rounded-xl bg-gradient-to-r from-secondary mt-[2.7rem] to-primary text-[#190C33]">
            Play Now
          </button>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            src="/assets/Hero.gif"
            className="w-full md:scale-[1.3]"
            alt="image"
            width={600}
            height={600}
          />
        </div>
      </div>
      <Image
        src="/assets/man.png"
        className=" md:ml-[32%] mt-[4rem] md:mt-[-10px] mr-auto mb-[-0.2%]"
        alt="image"
        height={250}
        width={250}
      />
    </div>
  );
};

export default Landing;
