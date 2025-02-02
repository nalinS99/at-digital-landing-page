import React from "react";
import ServiceCard from "./ServiceCard";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";

function Services() {
  return (
    <>
      <ServiceCard
        url={img1}
        title="Web & Mobile App Development"
        description="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
        reverse={false}
      />

      <ServiceCard
        url={img2}
        title="Digital Strategy Consulting"
        description="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
        reverse={true}
      />
    </>
  );
}

export default Services;
