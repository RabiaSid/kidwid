import React from "react";
import baseColors from "@/constant";
import {RobotIcon} from "@/assets";

function MessageReceived({title}) {
  return (
    <div className="col-12 col-lg-8 d-flex justify-content-end align-items-center" >
    <div
      className="row mt-4 mx-1 shadow-lg rounded-3 p-0"
      style={{ width: "100%", background: baseColors.White }}
    >
      <div
        className="col-2 d-flex justify-content-center align-items-start flex-column ps-0"
        style={{
          borderRadius: "50%",
          marginTop: "-10px",
          marginBottom: "auto",
          marginLeft: "-10px",
        }}
      >
        <img
          src={RobotIcon}
          style={{ borderRadius: "50%", background: baseColors.BlueColor }}
        />
      </div>
      <div className="col-10 py-2">
        <text className="">
            {title}
        </text>
      </div>
    </div>
    </div>
  );
}

export default MessageReceived;
