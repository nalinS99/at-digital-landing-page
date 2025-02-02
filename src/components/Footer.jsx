import React from "react";
import img from "../assets/images/Logo.png";

function Footer() {
  return (
    <>
      <div
        className="bg-primary text-white 
                    xs:p-[20px]  
                    md:px-[40px] 
                    xl2:px-[60px] xl2:h-[300px]
                    xl3:px-[80px] xl3:h-[300px] "
      >
        <div
          className="grid-cols-2
                        xl2:grid "
        >
          <div>
            <img
              src={img}
              alt="at digital"
              className="w-[190px] h-[85px]
                         xs:py-[20px]"
            />

            <p
              className="text-[16px] leading-[20px] font-lato 
                          xs:w-[335px] 
                          md:w-[413px] "
            >
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>

          <div
            className="grid-cols-2 
                          md:grid "
          >
            <div
              className="xs:pt-[40px] xs:pb-[40px] 
                            md:pt-[60px] 
                            xl2:pt-[20px]"
            >
              <h6 className="text-[21px] font-semibold">Our Technologies</h6>
              <p className="text-[14px] pt-[12px]">ReactJS</p>
              <p className="text-[14px] pt-[12px]">Gatsby</p>
              <p className="text-[14px] pt-[12px]">NextJS</p>
              <p className="text-[14px] pt-[12px]">NodeJS</p>
            </div>

            <div
              className="xs:pb-[30px] 
                            md:pt-[60px] 
                            xl2:pt-[20px] "
            >
              <h6 className="text-[21px] font-semibold">Our Services</h6>
              <p className="text-[14px] pt-[10px]">Social media Marketing</p>
              <p className="text-[14px] pt-[10px]">
                Web & Mobile App Development
              </p>
              <p className="text-[14px] pt-[10px]">Data & Analytics</p>
            </div>
          </div>
        </div>

        <div>
          <hr
            className="h-[1px] 
                        md:mx-[69px]"
          />
          <p className="text-center pt-[8px] mb-20px ">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
