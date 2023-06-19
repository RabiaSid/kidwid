import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BlueFlower1 } from "@/assets";
import { styles } from "@/styles/style";
import baseColors from "@/constant";
import { AiFillStar } from "react-icons/ai";
import ReviewCard from "./card/Reviewcard";




function CheckCarousel() {
  const [sliderRef, setSliderRef] = useState(null);
  

  const sliderSettings = {
    // removes default buttons

    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true, 

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const ReviewCards = [
    {
      title: "Kids Love it",
      subTitle: "- Sarah K., New York",
      description:
        "KidWiz has been a game-changer for our family! My daughter loves herm personalized learning plan, and I've seen a significant improvement in her engagement and motivation to learn. The AI companion adapts to her unique needs, and I couldn't be happier with the results. KidWiz is the future of early childhood education.",
    },
    {
      title: "Kids Love it",
      subTitle: "- Sarah K., New York",
      description:
        "KidWiz has been a game-changer for our family! My daughter loves herm personalized learning plan, and I've seen a significant improvement in her engagement and motivation to learn. The AI companion adapts to her unique needs, and I couldn't be happier with the results. KidWiz is the future of early childhood education.",
    },
    {
      title: "Kids Love it",
      subTitle: "- Sarah K., New York",
      description:
        "KidWiz has been a game-changer for our family! My daughter loves herm personalized learning plan, and I've seen a significant improvement in her engagement and motivation to learn. The AI companion adapts to her unique needs, and I couldn't be happier with the results. KidWiz is the future of early childhood education.",
    },
    {
      title: "Kids Love it",
      subTitle: "- Sarah K., New York",
      description:
        "KidWiz has been a game-changer for our family! My daughter loves herm personalized learning plan, and I've seen a significant improvement in her engagement and motivation to learn. The AI companion adapts to her unique needs, and I couldn't be happier with the results. KidWiz is the future of early childhood education.",
    },
  ];
  return (
    <div className="content row m-0 d-flex justify-content-center align-items-center py-5 ">
      <div className="col-10">
        <div className="row">
          <div className="col-12 col-md-8 col-xl-5 d-flex justify-content-start align-items-center ps-0 me-auto  pt-5 pt-md-0">
            <div className="row m-0">
              <div className="text-left py-3 m-0 p-0 ">
                <text style={styles.Text2bold}>
                  Don't take our word for It: Uncover the Life-Changing Impact
                  of KidWiz on Families
                </text>
              </div>
              <div>
                <button
                  onClick={sliderRef?.slickPrev}
                  className="shadow-sm"
                  style={styles.slider_arrow_Prev}
                >
                  <FaChevronLeft style={styles.slider_arrow_Text} />
                </button>
                <button
                  onClick={sliderRef?.slickNext}
                  className="shadow-sm"
                  style={styles.slider_arrow_Back}
                >
                  <FaChevronRight style={styles.slider_arrow_Text} />
                </button>
              </div>
              <div className="border">
                
              </div>
              <div className="col-4 text-justify py-1 m-0 p-0 ">
                <img
                  src={BlueFlower1}
                  style={{ height: "10vh", width: "auto" }}
                />
              </div>
            </div>
          </div>
          <Slider
            ref={setSliderRef}
            {...sliderSettings}
            className="col-12 col-md-4 d-flex justify-content-center  "
            style={{ border: "1px solid red" }}
          >
            {ReviewCards.map((card, index) => {
              return <ReviewCard key={index} data={card} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CheckCarousel;
