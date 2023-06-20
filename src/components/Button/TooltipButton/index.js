import React from "react";

function TooltipButton({
  className,
  height,
  width,
  color,
  backgroundColor,
  title,
  fontWeight,
  borderRadius,
  fontSize,
  opacity,
}) {
  const border =
    backgroundColor === "transparent"
      ? `2px solid ${baseColors.primaryColor}`
      : "none";

  const styles = {
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
    <button
      style={styles.button}
      className={className}
      data-toggle="tooltip" data-placement="bottom"
    >
      {title}
    </button>
  );
}

export default TooltipButton;
