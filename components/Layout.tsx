import Image from "next/image";
import { ReactNode } from "react";

type children = {
  children: ReactNode;
};

const Layout = ({ children }: children) => {
  return (
    <section className="w-full">
      <section className="w-full bg-[#120926] text-white sticky top-0 z-[1] py-4">
        <nav className="w-11/12 xl:w-3/4 mx-auto items-center flex justify-between">
          <Image
            src="/assets/newLogo.png"
            alt="logo"
            width={150}
            height={150}
          />
          <div className="flex gap-9 items-center">
            <a className="hidden md:block">Home</a>
            <a className="hidden md:block">Marketplace</a>
            <button className="h-[2.8rem] w-[10rem] rounded-xl bg-gradient-to-r from-secondary to-primary text-[#190C33]">
              Start playing
            </button>
          </div>
        </nav>
      </section>
      {children}
    </section>
  );
};

export default Layout;
