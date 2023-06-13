import React from "react";
import { BannerImage1, BannerImage2, BannerImage3, WhiteBlueBackground } from "@/assets";
import { styles } from "@/styles/style";
import baseColors from "@/constant";

function HomeSectionThree() {
  return (
    <div
      className="row d-flex justify-content-center m-0 py-5"
      style={{
        background: baseColors.backgroundLight,
      }}
    >
      <div className="text-center py-1 m-0 p-0 ">
        <span style={styles.Heading2}>What We Offer</span>
      </div>

      <div className="text-center py-2 m-0 p-0 ">
        <text>Education that Goes Beyond the Traditional Classroom</text>
      </div>
      <div
        className="col-12 col-md-11 col-lg-7  m-0"
        style={styles.CheckBorder}
      >
        <div className="row m-0 d-flex justify-content-center align-items-center py-5">
          <div className="col-12 col-md-8 col-xl-8 d-flex justify-content-start align-items-center ps-0 me-auto  pt-5 pt-md-0">
            <div className="row m-0">
              <div className="text-left py-1 m-0 p-0 ">
                <text style={styles.Text2bold}>
                  Sparking Curiosity and Creativity with KidWiz's Interactive
                  Education
                </text>
              </div>
              <div className="col-10 text-justify py-1 m-0 p-0 ">
                <text style={styles.Text2Black}>
                  At KidWiz, we believe that every child is unique and deserves
                  an education that caters to their individual strengths and
                  interests. That's why we offer a comprehensive range of topics
                  that go beyond the traditional classroom subjects. Our
                  interactive and engaging lessons are designed to spark
                  curiosity, foster creativity, and develop critical thinking
                  skills in children ages 5-12.
                </text>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-xl-4 d-flex justify-content-center">
            <img src={BannerImage2} style={{ height: "50vh", width: "auto" }} />
          </div>
          <div className="col-12 col-md-5  col-xl-5 d-flex justify-content-center">
            <img src={BannerImage3} style={{ height: "50vh", width: "auto" }} className="img-fluid"/>
          </div>
          <div className="col-12 col-md-7  col-xl-7 d-flex justify-content-start align-items-center ps-0 me-auto  pt-5 pt-md-0">
            <div className="row m-0">
              <div className="text-left py-1 m-0 p-0 ">
                <text style={styles.Text2bold}>
                  Sparking Curiosity and Creativity with KidWiz's Interactive
                  Education
                </text>
              </div>
              <div className="col-10 text-justify py-1 m-0 p-0 ">
                <text style={styles.Text2Black}>
                  At KidWiz, we believe that every child is unique and deserves
                  an education that caters to their individual strengths and
                  interests. That's why we offer a comprehensive range of topics
                  that go beyond the traditional classroom subjects. Our
                  interactive and engaging lessons are designed to spark
                  curiosity, foster creativity, and develop critical thinking
                  skills in children ages 5-12.
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionThree;
