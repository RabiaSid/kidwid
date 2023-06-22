import React from "react";
import baseColors from "@/constant";
import _ from "lodash";

const defaultStyles = {
  button: {
    elevation: 8,
    backgroundColor: baseColors.lightColor,
    border: baseColors.sucessColor,
    color: baseColors.primaryTextColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    margin: 10,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  }
};

function PrimaryButton({ className, title, styles: customStyles }) {
  
    let styles = defaultStyles.ButtonContainer;
    if (!_.isEmpty(customStyles)) {
      styles = { styles, ...customStyles };
    }
  

  return (
    <button type="button" style={styles} className={className}>
      {title}
    </button>
  );
}

export default PrimaryButton;
