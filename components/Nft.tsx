import Image from "next/image";

const Nft = () => {
  return (
    <div className="w-11/12 xl:w-3/4 my-[10rem] mx-auto flex flex-wrap gap-y-[4rem] justify-between items-center mt-[8rem]">
      <div className="w-ful md:w-[48%]">
        <Image
          src="/assets/protect.png"
          className="w-full"
          alt="image"
          width={600}
          height={600}
        />
      </div>
      <div className="w-full md:w-[48%] shrink-0 m">
        <h1 className="text-[2rem] xl:text-[4rem] leading-none mb-8 font-bold">
          {" "}
          Win NFTs as you <span className="lg:block">take territories</span>
        </h1>
        <p className="">
          As you explore the vast and dangerous expanse of space, you have the
          chance to collect rare and valuable NFTs that can enhance your
          abilities and give you an edge over your rivals. These NFTs can
          represent unique equipment, upgrades, or even powerful spacecraft that
          can help you conquer new frontiers and dominate the galaxy. With every
          mission you complete and challenge you overcome, you wll have the
          chance to win coveted NFTs that can propel you to victory in this epic
          space adventure.
        </p>
        <button className="h-[3.5rem] w-[10rem] rounded-xl bg-gradient-to-r from-secondary mt-[3rem] to-primary text-[#190C33]">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Nft;
