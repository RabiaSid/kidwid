import React from "react";
import {
  FlowerWithFace,
  PurpleButterfly,
  Cattepillare,
  FlameBook,
  GLobal,
  MultiBackground,
} from "@/assets";
import PrimaryButton from "@/components/Button/PrimaryButton";
import baseColors from "@/constant";
import { styles } from "@/styles/style";
import InputField from "@/components/InputField";

function HomeSectionTen() {
  return (
    <div
      className="row d-flex justify-content-center m-0 py-5 "
      style={{
        background: baseColors.White,
      }}
    >
      <div
        className="row m-0 mt-5 p-5 d-flex justify-content-center"
        style={{ background: baseColors.BlueColor }}
      >
        <div className="col-12 col-md-10 col-lg-7 col-xl-6 ">
          <div className="row d-flex justify-content-center my-4 position-relative m-0">
            <div className="col-2 position-absolute top-0 start-0">
              <img
                src={Cattepillare}
                style={{ width:"auto", height:"25vh" }}
              />
            </div>
            <div className="col-4 position-absolute top-50 start-50 translate-middle">
              <img
                src={FlowerWithFace}
                style={{ height: "33vh", width: "auto" }}
              />
            </div>
            <div className="col-3 position-absolute bottom-0 end-0">
              <img
                src={PurpleButterfly}
                style={{ height: "15vh", width: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center pt-5 pb-3 mt-5">
        <div className="col-1 col-sm-3 col-lg-1 d-flex justify-content-center">
          <img className="img-fluid " src={FlameBook}  style={{width:"20vw", maxWidth:"auto", height:"20vh"}}/>
        </div>
        <div className="col-10 col-sm-6 col-lg-5 text-center d-flex justify-content-center align-items-center">
          <span style={styles.RresponsiveHeading}>
            Join us in igniting the Flames of Knowledge!
          </span>
        </div>
        <div className="col-1 col-sm-3 col-lg-1 d-flex justify-content-center">
          <img className="img-fluid " src={GLobal}  style={{width:"40vw", maxWidth:"auto", height:"20vh"}}/>
        </div>
      </div>

      <div className="col-11 col-md-7 text-left m-0 p-0 ">
        <text style={styles.Text2Black}>
          Together, let us ignite the flames of knowledge, and watch as the
          sparks of wisdom and creativity take flight. We invite you to join us
          in our quest to create a world where the next generation of
          innovators, dreamers, and leaders is nurtured and inspired – a world
          where the pursuit of knowledge knows no bounds.
        </text>
      </div>
      <div className="col-12 m-0 d-flex justify-content-center align-items-end w-100"
      style={{
        background: `url(${MultiBackground}) no-repeat`,
        height: "50vh",
        minHeight:"auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:'center',
      }}>
        <InputField 
        className="border rounded "
        placeholder='Email'
        height={'7vh'}
        width={'40vw'}
        boxShadow={`inset 0 0 5px ${baseColors.LightGreyColor}`}/>
      </div>
    </div>
  );
}

export default HomeSectionTen;
