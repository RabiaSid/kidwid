import { FaceBook, Instagram, LinkedIn, Twitter } from "@/assets";
import baseColors from "@/constant";
import { styles } from "@/styles/style";
import React from "react";

function AppFooter() {
  return (
    <div
      className="row m-0 py-5 d-flex justify-content-center "
      style={{ background: baseColors.backgroundLight }}
    >
      <div className="col-3 col-md-2">
        <div className="row">
          <text className="py-2" style={styles.Text3Bold}>
            KidWiz
          </text>
          <text className="py-1" style={styles.Text3}>
            Privacy Policy
          </text>
          <text className="py-1">Terms and Conditions</text>
        </div>
      </div>
      <div className="col-4 col-md-3">
        <div className="row">
          <text className="py-2" style={styles.Text3Bold}>
            Resources
          </text>
          <text className="py-1" style={styles.Text3}>
            Education Blogs
          </text>
        </div>
      </div>
      <div className="col-4 col-md-2">
        <div className="row">
          <text className="py-2" style={styles.Text3Bold}>
            Contact
          </text>
          <text className="py-1" style={styles.Text3}>
            1-(530) 325-0852
          </text>
          <text className="py-1" style={styles.Text3}>
            info@kidwizlearning.com
          </text>
          <p>
            <span className="pe-2">
              <img src={FaceBook} />
            </span>
            <span className="pe-2">
              <img src={Instagram} />
            </span>
            <span className="pe-2">
              <img src={Twitter} />
            </span>
            <span className="pe-2">
              <img src={LinkedIn} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
