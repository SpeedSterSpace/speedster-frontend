import React from "react";

const Roadmap = () => {
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
    <div className="">
      <div className="bg-ground bg-cover bg-center text-white p-1">
        <p className="text-center text-[2rem] xl:text-[4rem] font-bold md:mt-[6rem] mt-[3rem]">
          Project Roadmap
        </p>
        <div className="hidden md:block md:w-11/12 xl:w-3/4 mx-auto relative bg-white h-[1px] my-[8rem] ">
          {project.map((item, index) => (
            <div
              key={index}
              className={`${
                index == 0 &&
                "absolute top-[-4.5rem] text-center left-[-1rem] lg:left-[-3rem]"
              } ${
                index == 1 &&
                "absolute bottom-[-4.5rem] left-[17%] lg:left-[20%]"
              } ${
                index == 2 && "absolute top-[-4.4rem] left-[36%] lg:left-[42%]"
              } ${
                index == 3 &&
                "absolute bottom-[-4.5rem] right-[12%] lg:right-[15%]"
              } ${
                index == 4 &&
                "absolute top-[-4.4rem] right-[-1rem] text-center lg:right-[-2.5rem]"
              }`}
            >
              {index % 2 == 0 ? (
                <>
                  <p>{item.title}</p>
                  <p className="text-center">{item.content}</p>
                  <div className="rounded-full bg-white h-[15px] w-[15px] mt-[1rem] mx-auto"></div>
                </>
              ) : (
                <>
                  <div
                    className={`rounded-full ${
                      index == 1 ? "bg-[orange]" : "bg-white"
                    } h-[15px] w-[15px] mb-[1rem] mx-auto`}
                  ></div>
                  <p>{item.title}</p>
                  <p className="text-center">{item.content}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex my-[2rem] md:hidden text-white w-full">
          <div className="w-[1px] grow block bg-white"></div>
          <div className="w-[99%]">
            {project.map((date, index) => (
              <div
                key={index}
                className="flex w-full mb-[1rem] justify-start gap-[15%] items-center"
              >
                <div
                  className={`rounded-full ${
                    index == 1 ? "bg-[orange]" : "bg-white"
                  } h-[15px] w-[15px]`}
                ></div>
                <div>
                  <p>{date.title}</p>
                  <p className="">{date.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="bg-[#170B30] text-white py-3 w-full text-center">
        © copyright 2023
      </p>
    </div>
  );
};

export default Roadmap;
