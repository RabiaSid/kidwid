import { BannerImage1, WhiteBlueBackground, WhiteBlueBackground2 } from "@/assets";
import React, { useState } from "react";
import { styles } from "@/styles/style";
import baseColors from "@/constant";
import MessageReceived from "@/components/chat/MessageReceived";
import MessageSend from "@/components/chat/MessageSend";
import ChatAnime from "./ChatAnime";

function HomeSectionone() {
  return (
    <div
      className="row d-flex justify-content-center m-0 "
      style={{ background: baseColors.White }}
    >
      <div
        className="col-12 "
        style={{
          background: `url(${WhiteBlueBackground2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover",
          height: "auto",
          minHeight: "70vh",
          width:"100%",
          backgroundPosition: "center",
        }}
      >
        <div className="row m-0 d-flex justify-content-center align-items-center py-5">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 pt-5 pt-md-0">
            <div className="row d-flex justify-content-center align-items-center py-4">
              <div className="col-12 col-lg-9 d-flex justify-content-center align-items-center px-0 pt-5 pt-md-0">
                <div className="row m-0">
                  <span style={styles.Heading1} className="p-0">
                    Unlock Your{" "}
                    <span style={styles.Heading1Green}>
                      {" "}
                      Child's Full Potential
                    </span>
                  </span>
                  <br></br>
                  <span style={styles.Text1} className="p-0">
                    Nurture your child’s growth with our{" "}
                    <span style={styles.Text1Bold}>AI-Powered</span>{" "}
                    Personalized Learning Companion.
                  </span>
                  
                  <div className="row px-4">
                  <ChatAnime />
                    
                  </div>
                </div>
              </div>
              <div className="col-12  col-lg-3 d-flex justify-content-center">
                <img
                  src={BannerImage1}
                  style={{ height: "70vh", width: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  
}

export default HomeSectionone;
