import { BlueBackground } from "@/assets";
import React from "react";
import { styles } from "@/styles/style";

function HomeSectionTwo() {
  return (
    <div
      className=" d-flex align-items-center justify-content-center  p-0 "
      style={{
        background: `url(${BlueBackground}) no-repeat`,
        height: "auto",
        minHeight:"70vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:'center',
        marginTop:-30
      }}
    >
      <div className="container p-2">
      <div className="text-center py-2 m-0 p-0 ">
        <text style={styles.Heading1White}>Welcome to KidWiz! </text>
      </div>
      <div className="text-center  py-2 m-0 ">
        <text style={styles.Text1WhiteBold}>
          The AI-Powered Personalized Learning Companion that is revolutionizing
          early childhood education and parenting skills.{" "}
        </text>
      </div>
      <div className="text-left py-2 m-0 p-0">
        <text style={styles.Text1White}>
          Welcome to KidWiz, the AI-powered personalized learning companion
          that's revolutionizing early childhood education. Our innovative
          solution combines the best elements from various educational
          approaches to create a truly unique and engaging learning experience
          for your child. 
        </text>
      </div>
      <div className="text-left py-2 m-0 p-0">
        <text style={styles.Text1White}>With KidWiz, your child will have access to a
          comprehensive range of topics, including specialized skills like
          music, languages, coding, and entrepreneurship, as well as life skills
          and emotional intelligence lessons. Plus, our interactive parental
          role-playing scenarios allow you to practice and develop your
          parenting skills in real-world situations. Join the KidWiz community
          today and give your child the gift of a lifetime of learning.</text>
      </div>
      </div>
    </div>
  );
}

export default HomeSectionTwo;
