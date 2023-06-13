import React from "react";
import baseColors from "@/constant";
import {UserIcon} from "@/assets";

function MessageSend({title}) {
  return (
    <div className="col-12 col-lg-8 d-flex justify-content-center align-items-end flex-column" >
    <div
      className="row mt-4 mx-1 shadow-lg rounded-3 p-0"
      style={{width:"70%",  background: baseColors.White }}
    >
      
      <div className="col-10 py-3 text-center">
        <text className="">
            {title}
        </text>
      </div>
      <div
        className="col-2 d-flex justify-content-center align-items-end flex-column pe-0"
        style={{
          borderRadius: "50%",
          marginTop: "-10px",
          marginBottom: "auto",
          marginRight: "-15px",
        }}
      >
        <img
          src={UserIcon}
          className="px-2 pt-1"
          style={{ borderRadius: "50%", background: baseColors.PurpleColor }}
        />
      </div>
    </div>
    </div>
  );
}

export default MessageSend;
