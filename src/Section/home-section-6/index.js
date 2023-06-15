import React from "react";
import { BlueFlower1 } from "@/assets";
import { styles } from "@/styles/style";
import baseColors from "@/constant";
import ReviewCard from "@/components/card/Reviewcard";

function HomeSectionSix() {
  return (
    <div
      className="row d-flex justify-content-center m-0 py-5 p-0"
      style={{
        background: baseColors.backgroundLight,
      }}
    >
      <div className="col-12 col-md-11 col-lg-8  m-0">
        <div className="row m-0 d-flex justify-content-center align-items-start ">
          <div className="col-12 col-md-8 col-xl-7 d-flex justify-content-start align-items-center ps-0 me-auto  pt-5 pt-md-0">
            <div className="row m-0">
              <div className="text-left py-3 m-0 p-0 ">
                <text style={styles.Text2bold}>
                  Don't take our word for It: Uncover the Life-Changing Impact
                  of KidWiz on Families
                </text>
              </div>
              <div className="col-4 text-justify py-1 m-0 p-0 ">
                <img
                  src={BlueFlower1}
                  style={{ height: "10vh", width: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-xl-5 d-flex justify-content-center">
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionSix;
