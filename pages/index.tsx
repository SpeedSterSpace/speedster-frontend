import Image from "next/image";
import { motion } from "framer-motion";
import { data, secondData } from "@/data";
import Grid from "@/components/Grid";
import Landing from "@/components/Landing";
import Speedster from "@/components/Speedster";
import Roadmap from "@/components/Roadmap";
import Partners from "@/components/Partners";
import Slider from "@/components/Slider";
import Nft from "@/components/Nft";
import Typewriter from "typewriter-effect";

export default function Home() {
  const project = [
    {
      title: "Game Launch",
      content: "Q2 2023",
    },
    {
      title: "Marketplace Launch",
      content: "Q3 2023",
    },
    {
      title: "Asgarde and Avenir Launch",
      content: "Q4 2023",
    },
    {
      title: "Game V2 (Multiplayer Launch)",
      content: "Q1 2024",
    },
    {
      title: "Launch",
      content: "Q3 2024",
    },
  ];

  return (
    <main>
      <Landing />
      <Speedster />
      <div className="w-11/12 xl:w-3/4 mx-auto md:my-[8rem] mt-[5rem]">
        <h2 className="text-[2rem] xl:text-[4rem] leading-none mb-8 font-bold">
          Galaxies Unending....
        </h2>
        <div className="flex flex-wrap gap-x-[2%] content-start gap-y-[5rem]">
          {data.map((item, index) => (
            <Grid
              key={index}
              name={item.name}
              image={item.image}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <Slider />
      <Nft />
      <div className="w-11/12 xl:w-3/4 mx-auto md:my-[8rem] mt-[5rem]">
        <h2 className="text-[2rem] xl:text-[4rem] leading-none mb-8 font-bold">
          Marketplace
        </h2>
        <div className="flex flex-wrap gap-x-[2%] gap-y-[5rem]">
          {secondData.map((item, index) => (
            <Grid
              key={index}
              buttonName={item.buttonName}
              name={item.name}
              image={item.image}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <Partners />
      <Roadmap />
    </main>
  );
}
