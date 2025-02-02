import React from "react";
import hero from "../assets/images/hero.png";
import Button from "./Button";

function Hero() {
  return (
    <div>
      <img src={hero} alt="hero" className="w-screen h-auto" />
      <div
        className="bg-gradient-to-r from-dark to-analogous2 
                   xs:px-[30px] xs:py-[20px] 
                   xl2:absolute xl2:top-[300px] xl2:left-[60px] xl2:w-[600px]
                   xl3:absolute xl3:top-[450px] xl3:left-[80px] xl3:w-[630px]"
      >
        <h1
          className="text-[36px] leading-[36px] text-white font-bold 
                       xs:pb-[20px]
                       xl2:text-[48px] xl2:leading-[48px]"
        >
          We Crush Your Competitors , <br /> Goals, And Sales Records - <br />
          Without The B.S.
        </h1>
        <Button name="GET FREE CONSULTATION" />
      </div>
    </div>
  );
}

export default Hero;
