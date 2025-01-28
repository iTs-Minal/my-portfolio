"use client"
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRef } from "react";

const Navbar = () => {

const sideMenuRef = useRef<HTMLUListElement|null>(null);

const openMenu =()=>{
    if(sideMenuRef.current){

        sideMenuRef.current.style.transform="translateX(-16rem)"
    }
}

const closeMenu =()=>{
    if(sideMenuRef.current){

        sideMenuRef.current.style.transform="translateX(16rem)"
    }
}

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav className="w-full  fixed px-4 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50">
        <a href="#top" title="To the top">
          <Image
            src={assets.logo}
            alt="logo"
            width={50} height={50}
            className="cursor-pointer mr-14"
          />
        </a>

        <ul className="hidden md:flex ml-14 items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button title="Toggle theme">
            <Image src={assets.moon_icon} alt="Toggle theme" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact <Image src={assets.arrow_icon} className="w-3" alt="" />{" "}
          </a>

          <button onClick={openMenu} className="block md:hidden ml-3">
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* --------------------- mobile-menu --------------*/}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ">

<div onClick={closeMenu} className="absolute right-6 top-6">
    <Image src={assets.close_black} alt=" " className="w-5 cursor-pointer" />
</div>

          <li>
            <a onClick={closeMenu} className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
