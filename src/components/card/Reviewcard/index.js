import baseColors from "@/constant";
import { styles } from "@/styles/style";
import React from "react";
import { AiFillStar } from "react-icons/ai";

function ReviewCard({ data }) {
  return (
    <div key={data?.key} className="px-4 pt-5 pb-4 shadow-lg" style={{ border: "none", background:baseColors.White, borderRadius:'20px',  }}>
      <div className="row">
       <p> <span style={styles.Text3Bold}>Kids Love it</span>
        <span style={styles.Text3}> - Sarah K., New York</span></p>
      </div>
      <div className="row py-1">
        <span style={styles.Text3}>
        {data?.desc}
          {/* KidWiz has been a game-changer for our family! My daughter loves her
          personalized learning plan, and I've seen a significant improvement in
          her engagement and motivation to learn. The AI companion adapts to her
          unique needs, and I couldn't be happier with the results. KidWiz is
          the future of early childhood education. */}
        </span>
      </div>
      <div className="row ">
      <p> <span>
          <AiFillStar />
        </span>
        <span>
          <AiFillStar />
        </span>
        <span>
          <AiFillStar />
        </span>
        <span>
          <AiFillStar />
        </span>
        <span>
          <AiFillStar />
        </span>
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
