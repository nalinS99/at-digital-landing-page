import React from "react";
import logo from "../assets/images/logo.png";
import { useState } from "react";

function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className=" bg-primary flex justify-between 
                    px-[20px] py-[26px] h-[80px]
                    md:px-[40px] md:py-[26px] md:h[80px]
                    xl2:px-[60px] xl2:py-[26px]  xl2:h-[101.5px] 
                    xl3:px-[80px] xl3:py-[26px] xl3:h-[101px] "
      >
        <img
          src={logo}
          alt="Logo"
          className=" w-[152px] h-[33px]
                      xs:w-[152px] xs:h-[33px] 
                      md:w-[226px] md:h-[49px] 
                      xl2:w-[226px] xl2:h-[49px]
                      xl3:w-[226px] xl3:h-[49px] "
        />

        <div>
          <ul className="hidden md:flex text-white  font-[14px] my-[10px] leading-[16px]  ">
            <li>
              <a href="#" className="pr-[28px] ">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="pr-[28px]">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="pr-[28px]">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="#" className="">
                CAREERS
              </a>
            </li>
          </ul>
        </div>
        <button
          className="md:hidden text-white text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-white text-black flex flex-col  p-8 ">
            <button
              className="absolute top-[16px] right-[20px] text-3xl z-50"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            <ul className="text-[14px] space-y-[16px] ">
              <li>
                <a href="#" className="block">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="block">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#" className="block">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="block">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="#" className="block">
                  CAREERS
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default TopNavigation;
