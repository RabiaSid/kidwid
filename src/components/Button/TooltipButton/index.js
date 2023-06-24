import React from "react";
import baseColors from "@/constant";
import { Tooltip } from "antd";
import { styles } from "@/styles/style";

function TooltipButton({
  height,
  width,
  color,
  border,
  backgroundColor,
  fontWeight,
  borderRadius,
  fontSize,
  opacity,
  overlayClassName,
  // overlayStyle,
  // overlayInnerStyle,
  title,
  main,
}) {
  const stylee = {
    button: {
      height: height && height,
      minHeight: "30px",
      minWidth: "170px",
      width: width && width,
      color,
      fontWeight: fontWeight && fontWeight,
      fontSize: fontSize ? fontSize : "15px",
      border,
      backgroundColor,
      textAlign: "center",
      borderRadius: borderRadius ? borderRadius : "2px",
      cursor: "pointer",
      opacity: opacity,
    },
  };
  return (
    <Tooltip
      // className={className} not working
      mouseEnterDelay={0.1}
      title={title}
      overlayClassName={overlayClassName} //tooltip classname
      overlayStyle={styles.tooltipouterBox}
      overlayInnerStyle={styles.tooltipInnerBox} //tooltip style
      placement="bottom"
      
    >

      <div className="btn shadow d-flex justify-content-center align-items-center " style={stylee.button}>
        <span>{main}</span>
      </div>
    </Tooltip>
  );
}

export default TooltipButton;
