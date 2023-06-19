import baseColors from "@/constant";
import { styles } from "@/styles/style";
import React from "react";
import { AiFillStar } from "react-icons/ai";

function ReviewCard({ data }) {
  return (
    <div
    key={data.key}
    className="px-4 pt-5 pb-4 m-3 shadow"
    style={{
      background: baseColors.White,
      borderRadius: "20px",
    }}
  >
    <div className="row">
      <p>
        {" "}
        <span style={styles.Text3Bold}>{data.title}</span>
        <span style={styles.Text3}>{data.subTitle}</span>
      </p>
    </div>
    <div className="row py-1">
      <span style={styles.Text3}>
      {data.description}
      </span>
    </div>
    <div className="row ">
      <p>
        {" "}
        <span>
          <AiFillStar style={styles.IconYellow}/>
        </span>
        <span>
          <AiFillStar style={styles.IconYellow}/>
        </span>
        <span>
          <AiFillStar style={styles.IconYellow}/>
        </span>
        <span>
          <AiFillStar style={styles.IconYellow}/>
        </span>
        <span>
          <AiFillStar style={styles.IconYellow}/>
        </span>
      </p>
    </div>
  </div>
  );
}

export default ReviewCard;
