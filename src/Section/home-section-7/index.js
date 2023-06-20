import React from "react";
import { Arrow, BannerImage5, BannerImage6 } from "@/assets";
import { styles } from "@/styles/style";
import baseColors from "@/constant";
import PlanSwitchSelector from "@/components/SwitchSelector";

function HomeSectionSeven() {
  return (
    <div
      className="row d-flex justify-content-center m-0 py-5 "
      style={{
        background: baseColors.White,
      }}
    >
      <div className="text-center py-1 m-0 p-0 ">
        <span style={styles.Heading2}>Try KidWiz for FREE!</span>
      </div>

      <div className="text-center py-3 m-0 p-0 ">
        <text style={styles.Text1BlackBold}>
          Unleash Learning:<span style={styles.Text1Bold}> 7-Day FREE Trial </span> of KidWiz! 🧠
        </text>
      </div>
      <div className="col-8 col-md-5 col-lg-5 col-xl-3 my-3 " >
        <div className="row d-flex justify-content-center">
          {/* <div className="col-8">
            <div
              className="row p-2 shadow d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "35px",
                background:baseColors.White
              }}
            >
              <div
                className="col-7 d-flex justify-content-center align-items-center py-2"
                style={{
                  borderRadius: "35px",
                  background:baseColors.GreenColor,
                  color: baseColors.White
                }}
              >
                <text 
                style={{fontSize:"18px"}}
                >
                Monthly
                </text>
              </div>
              <div
                className="col-5 d-flex justify-content-center align-items-center py-2"
              >
                <text
                style={{fontSize:"18px", color: baseColors.GreyColor}}
                >
                Yearly
                </text>
              </div>
            </div>
          </div> */}
          <PlanSwitchSelector />
          <div className="col-4 d-flex justify-content-center align-items-end">
                <text
                style={{fontSize:"15px", color: baseColors.GreenColor}}
                >
                SAVE UP TO 20%
                </text>
          </div>
          <div className="row d-flex justify-content-end align-items-start">
          <div className="col-5 ">
            <img src={Arrow} style={{height:"3vh"}}/>
          </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default HomeSectionSeven;
