import React from "react";
import baseColors from "@/constant";
import { BlueFlower1 } from "@/assets";
import { styles } from "@/styles/style";
import Accordion from "@/components/Accordion";

function HomeSectionEight() {
  return (
    <div
      className="row d-flex justify-content-center m-0 py-5 "
      style={{
        background: baseColors.BlueColor,
      }}
    >
      <div className="row m-0 ">
          <div className="text-center pt-2 pb-3 m-0 p-0 ">
            <text style={styles.Heading1White}>
            Frequently Asked Questions
            </text>
          </div>
        </div>
      <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-6 m-0 pt-3 pb-5">
        <Accordion />
        {/* <div className="row m-0 d-flex justify-content-center align-items-start ">
          <div className="col-12 col-md-8 col-xl-7 d-flex justify-content-start align-items-center ps-0 me-auto  pt-5 pt-md-0"></div>
        </div> */}
      </div>
    </div>
  );
}

export default HomeSectionEight;
