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
        <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
          <div className="row d-flex justify-content-center my-4 position-relative m-0">
            <div className="col-2 position-absolute top-0 start-0">
              <img
                src={Cattepillare}
                style={{ height: "25vh", width: "auto" }}
              />
            </div>
            <div className="col-3 position-absolute top-50 start-50 translate-middle">
              <img
                src={FlowerWithFace}
                style={{ height: "33vh", width: "auto" }}
              />
            </div>
            <div className="col-2 position-absolute bottom-0 end-0">
              <img
                src={PurpleButterfly}
                style={{ height: "15vh", width: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center pt-5 pb-3 mt-0 mt-md-5">
        <div className="col-1 d-flex justify-content-center">
          <img src={FlameBook} style={{ height: "30vh", width: "auto" }} />
        </div>
        <div className="col-5 text-center">
          <span style={styles.Heading1}>
            Join us in igniting the Flames of Knowledge!
          </span>
        </div>
        <div className="col-1 d-flex justify-content-center">
          <img src={GLobal} style={{ height: "30vh", width: "auto" }} />
        </div>
      </div>

      <div className=" col-7 text-left m-0 p-0 ">
        <text>
          Together, let us ignite the flames of knowledge, and watch as the
          sparks of wisdom and creativity take flight. We invite you to join us
          in our quest to create a world where the next generation of
          innovators, dreamers, and leaders is nurtured and inspired – a world
          where the pursuit of knowledge knows no bounds.
        </text>
      </div>
      <div className="row m-0 d-flex justify-content-center align-items-end "
      style={{
        background: `url(${MultiBackground}) no-repeat`,
        height: "auto",
        minHeight:"60vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:'center',
      }}>
        <InputField 
        className="border rounded shadow-sm"
        placeholder='Email'
        height={'7vh'}
        width={'30vw'}/>
      </div>
    </div>
  );
}

export default HomeSectionTen;
