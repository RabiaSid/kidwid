import React from "react";
import { BannerImage5, BannerImage6 } from "@/assets";
import { styles } from "@/styles/style";
import baseColors from "@/constant";

function HomeSectionFive() {
  return (
    <div
      className="row d-flex justify-content-center m-0 py-5"
      style={{
        background: `linear-gradient(to bottom, ${baseColors.backgroundLight} 16%, ${baseColors.White} 100%)`,
      }}
    >
      <div className="text-center py-1 m-0 p-0 ">
        <span style={styles.Heading2}>How It Works?</span>
      </div>

      <div className="text-center py-2 m-0 p-0 ">
        <text style={styles.Text1BlackBold}>8 Steps to Begin Your Child’s Journey</text>
      </div>
      <div className="col-12 col-md-11 col-lg-7  m-0">
        <div className="row m-0 d-flex justify-content-center align-items-center py-5">
          <div className="col-12 col-md-8 col-xl-8 d-flex justify-content-start align-items-center ps-0 me-auto  pt-5 pt-md-0">
            <div className="row m-0">
              <div className="text-left py-3 m-0 p-0 ">
                <text style={styles.Text2bold}>
                  1. Sign Up and Create Your Child's Profile
                </text>
              </div>
              <div className="col-10 text-justify py-1 m-0 p-0 ">
                <text style={styles.Text2Black}>
                  Begin by signing up for a KidWiz account and creating a
                  profile for your child. Fill in some basic information, such
                  as your child's name, age, interests, and any prior
                  educational experiences. This information will help our
                  AI-powered companion to understand your child's unique needs
                  and tailor their learning experience accordingly.
                </text>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-xl-4 d-flex justify-content-center">
            <img src={BannerImage5} style={{ height: "50vh", width: "auto" }} />
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
      <div className=" col-11 col-md-8 col-lg-6 text-center py-1 m-0 p-0 ">
        <span style={styles.Heading2}>
          Your Child's Early Education is Important
        </span>
      </div>
      </div>
      <div className="col-12 col-md-11 col-lg-7  m-0">
        <div className="row m-0 d-flex justify-content-center align-items-center py-5">
          <div className="col-12 col-md-5  col-xl-5 d-flex justify-content-center">
            <img
              src={BannerImage6}
              style={{ height: "50vh", width: "auto" }}
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-7  col-xl-7  ps-0 me-auto  pt-5 pt-md-0">
            <div className="row d-flex justify-content-end align-items-center m-0">
              <div className="col-10 m-0 p-0 ">
                <p className="text-end" style={styles.Text2bold}>
                  Personalized Learning Pathways
                </p>
              </div>
              <div className=" text-justify m-0 p-0 ">
                <text style={styles.Text2Black}>
                  KidWiz's AI-powered companion creates a personalized learning
                  pathway for your child, adapting the curriculum and activities
                  to their individual needs and interests. This tailor-made
                  education ensures a more effective and enjoyable learning
                  experience.
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionFive;
