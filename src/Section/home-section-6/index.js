import React from "react";
import baseColors from "@/constant";
import ReviewCard from "@/components/card/Reviewcard";
import ReviewCarousel from "@/components/Carousel/ReviewCarousel";

function HomeSectionSix() {
  return (
    
      <div
        className="row m-0 "
        style={{
          background: baseColors.backgroundLight,
        }}
      >
        <ReviewCarousel />
        {/* <div className="col-12 col-md-11 col-lg-8  m-0">
          
        </div> */}
      </div>
  );
}

export default HomeSectionSix;
