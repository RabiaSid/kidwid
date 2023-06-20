import React from "react";
import {
  BannerImage5,
  BannerImage6,
  BannerImage7,
  BannerImage8,
} from "@/assets";
import { styles } from "@/styles/style";
import baseColors from "@/constant";

function HomeSectionNine() {
  return (
    <div
      className="row d-flex justify-content-center m-0 mt-5 position-relative"
      style={{
        background: `linear-gradient(to bottom, ${baseColors.backgroundLight} 16%, ${baseColors.White} 100%)`,
      }}
    >
      <div
        className="text-center py-1 m-0 p-0 position-sticky fixed-top row py-5 w-100"
        style={{
          margin: 0,
          padding: 0,
          width: "auto",
          height: "auto",
          background: baseColors.backgroundLight,
          opacity: "0.9",
          top: "90px",
          zIndex:1,
        }}
      >
        <span style={styles.Heading2}>Our Vision</span>
        <text
          className="text-center py-2 m-0 p-0 "
          style={styles.Text1BlackBold}
        >
          Igniting the Flames of Knowledge within each Child and Parent!
        </text>
      </div>

      <div className="col-12 col-md-11 col-lg-7  m-0">
        <div className="row m-0 d-flex justify-content-center align-items-center py-5">
          <div className="col-12 col-md-8 col-xl-8 d-flex justify-content-start align-items-center ps-0 me-auto  pt-5 pt-md-0">
            <div className="row m-0">
              <div className="text-left py-3 m-0 p-0 ">
                <text style={styles.Heading2}>
                  Empower Children to Reach Limitless Potential
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
            <img src={BannerImage8} style={{ height: "35vh", width: "auto" }} />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-11 col-lg-7">
        <div className="row d-flex justify-content-center align-items-center">
          <span style={styles.Heading2}>
            Revolutionize Education with AI-Driven Technologies
          </span>
          <text style={styles.Text2Black}>
            As pioneers in AI-driven education, we refuse to settle for
            mediocrity. We are determined to break free from the confines of
            traditional learning methodologies and forge a new path. A path that
            leads to a brighter future, a future where every child has access to
            the tools and resources they need to thrive in this ever-evolving
            world.
          </text>
        </div>
      </div>
      <div className="col-12 col-md-11 col-lg-7  m-0">
        <div className="row m-0 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-5  col-xl-5 d-flex justify-content-center">
            <img
              src={BannerImage7}
              style={{ height: "60vh", width: "auto" }}
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-7  col-xl-7  ps-0 me-auto ">
            <div className="row d-flex justify-content-end align-items-center m-0">
              <div className="col-10 m-0 p-0 ">
                <p className="text-end" style={styles.Heading2}>
                  Forge a New Path to a Brighter Future
                </p>
              </div>
              <div className=" text-justify m-0 p-0 ">
                <text style={styles.Text2Black}>
                  As pioneers in AI-driven education, we refuse to settle for
                  mediocrity. We are determined to break free from the confines
                  of traditional learning methodologies and forge a new path. A
                  path that leads to a brighter future, a future where every
                  child has access to the tools and resources they need to
                  thrive in this ever-evolving world.
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionNine;
