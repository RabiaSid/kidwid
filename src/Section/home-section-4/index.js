import { RainbowBackground } from "@/assets";
import TooltipButton from "@/components/Button/TooltipButton";
import baseColors from "@/constant";
import { styles } from "@/styles/style";
import { color } from "framer-motion";

import React from "react";

function HomeSectionFour() {
  return (
    <div
      className="row d-flex justify-content-center m-0  py-5 my-5"
      style={{
        background: baseColors.White,
      }}
    >
      <div
        className="row m-0 my-5 pt-5"
        style={{ background: baseColors.BlueColor }}
      >
        <div className=" col-12 my-4 position-relative">
          <div className="position-absolute top-100 start-50 translate-middle">
            <img
              src={RainbowBackground}
              style={{ height: "25vh", width: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="text-center  pt-5 m-0 p-0 ">
        <span style={styles.Heading1}>Topics We Cover</span>
      </div>

      <div className="text-center py-3 m-0 p-0 ">
        <text style={styles.Text1BlackBold}>
          Unlock Your Child's Potential with Our Wide Range of Engaging Topics
        </text>
      </div>
      <div className="col-9">
        {/* <TooltipButton 
        overlayClassName='border'
        overlayStyle={{background:baseColors.OrangeColor}}
        title='one'
        main='two'
        background={baseColors.OrangeColor}
        /> */}
        <div className="row d-flex justify-content-center m-0 pt-4 ">
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Social Studies"
              main="Social Studies"
              backgroundColor={baseColors.OrangeColor}
              // overlayClassName="d-flex justify-content-center align-items-center"
              // overlayStyle={{}}
              // overlayInnerStyle={{}}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Life Skills"
              main="Life Skills"
              backgroundColor={baseColors.PinkColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Biology"
              main="Biology"
              backgroundColor={baseColors.GreenColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
            />
          </div>
        </div>
        {/* <div className="row d-flex justify-content-center m-0 py-1">
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Math"
              backgroundColor={baseColors.PurpleColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="English"
              backgroundColor={baseColors.BlueColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Critical Thinking"
              backgroundColor={baseColors.PinkColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Music"
              backgroundColor={baseColors.PurpleColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center m-0 py-1">
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Environment"
              backgroundColor={baseColors.GreenColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Languages"
              backgroundColor={baseColors.OrangeColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Coding"
              backgroundColor={baseColors.BlueColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
          </div>
        <div className="row d-flex justify-content-center m-0 pb-4">
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Science"
              backgroundColor={baseColors.GreenColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Emotions"
              backgroundColor={baseColors.PinkColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Money"
              backgroundColor={baseColors.PurpleColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 d-flex justify-content-center">
            <TooltipButton
              title="Entrepreneurship"
              backgroundColor={baseColors.PinkColor}
              width={"15vw"}
              height={"6vh"}
              fontSize={"18px"}
              borderRadius={"7px"}
              color={baseColors.White}
              
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomeSectionFour;
