import React from "react";
import { BannerImage5, BannerImage6 } from "@/assets";

import ReviewPagination from "@/components/ReviewPagination";

function HomeSectionSix() {
  const images = [
    BannerImage5,
    BannerImage6
    // {
    //   key:'1',
    //   desc:'nbxcjhxgc'
    // },
    // {
    //   key:'2'
    // },
    // {
    //   key:'3'
    // }
  ];

  return (
    <div>
      
         <ReviewPagination images={images}/>
      
    </div>
  );
}

export default HomeSectionSix;
