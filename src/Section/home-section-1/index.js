import { BannerImage1, WhiteBlueBackground } from "@/assets";
import React from "react";
import { styles } from "@/styles/style";
import baseColors from "@/constant";
import MessageReceived from "@/components/chat/MessageReceived";
import MessageSend from "@/components/chat/MessageSend";

function HomeSectionone() {
  return (
    <div className="row d-flex justify-content-center m-0 " style={{background:baseColors.White, }}>
      <div
        className="col-11 "
        style={{
          background: `url(${WhiteBlueBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        height: "auto",
        minHeight:"80vh",
        backgroundPosition: 'center',
        }}
      >
        <div className="row m-0 d-flex justify-content-center align-items-center py-5">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 pt-5 pt-md-0">
            <div className="row d-flex justify-content-center align-items-center py-4">
              <div className="col-12 col-lg-10 d-flex justify-content-center align-items-center px-0 pt-5 pt-md-0">
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
                    <MessageReceived
                      title="
                    Hi there, Sarah! Are you ready for a fun day of learning? 😄"
                    />
                    <MessageSend title="Yes, I'm excited!" />
                    <MessageReceived
                      title="
                    That's great! Today, we'll explore the world of animals. 🐾 What's your 
favorite animal?"
                    />
                    <MessageSend title="I love elephants! 🐘" />
                  </div>
                </div>
              </div>
              <div className="col-12  col-lg-2 d-flex justify-content-center">
                <img
                  src={BannerImage1}
                  style={{ height:"70vh" , width: "auto",}}
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
