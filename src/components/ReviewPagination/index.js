import React, { useState } from "react";
import { BlueFlower1 } from "@/assets";
import { styles } from "@/styles/style";
import baseColors from "@/constant";
import { AiFillStar } from "react-icons/ai";

const ReviewPagination = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="row m-0 d-flex justify-content-center"
      style={{
        background: baseColors.backgroundLight,
        border:'1px solid red'
      }}
    >
      <div className="col-11">
      <div className="row d-flex justify-content-around align-items-center m-0 py-5 p-0" style={{
        border:'1px solid red'
      }}>
            <div className="col-12 col-md-8 col-xl-6 d-flex  align-items-center ps-0 me-auto  pt-5 pt-md-0" style={{
        border:'1px solid red'
      }}>
              <div className="row m-0">
                <div className="text-left py-3 m-0 p-0 ">
                  <text style={styles.Text2bold}>
                    Don't take our word for It: Uncover the Life-Changing Impact
                    of KidWiz on Families
                  </text>
                  <div className="slider-navigation col-6">
                    <button
                      className="btn btn-primary"
                      onClick={goToPreviousImage}
                    >
                      Previous
                    </button>
                    <button className="btn btn-primary" onClick={goToNextImage}>
                      Next
                    </button>
                    <ul className="pagination">
                      {images.map((image, index) => (
                        <li
                          key={index}
                          className={`page-item ${
                            index === currentImageIndex ? "active" : ""
                          }`}
                          onClick={() => goToImage(index)}
                        >
                          <button className="page-link">{index + 1}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-4 text-justify py-1 m-0 p-0 ">
                  <img
                    src={BlueFlower1}
                    style={{ height: "10vh", width: "auto" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xl-5 d-flex justify-content-center" style={{
        border:'1px solid red'
      }}>
              <div className="slider-images col-6">
                {/* <div
                  key={images?.key}
                  className="px-4 pt-5 pb-4 shadow-lg"
                  style={{
                    border: "none",
                    background: baseColors.White,
                    borderRadius: "20px",
                  }}
                >
                  <div className="row">
                    <p>
                      <span style={styles.Text3Bold}>Kids Love it</span>
                      <span style={styles.Text3}> - Sarah K., New York</span>
                    </p>
                  </div>
                  <div className="row py-1">
                    <span style={styles.Text3}>
                      KidWiz has been a game-changer for our family! My daughter
                      loves her personalized learning plan, and I've seen a
                      significant improvement in her engagement and motivation
                      to learn. The AI companion adapts to her unique needs, and
                      I couldn't be happier with the results. KidWiz is the
                      future of early childhood education.
                    </span>
                  </div>
                  <div className="row ">
                    <p>
                      {" "}
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
                      <span>
                        <AiFillStar />
                      </span>
                    </p>
                  </div>
                </div> */}
                <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
              </div>
      </div>
          
      </div>
      </div>
    </div>
  );
};

export default ReviewPagination;
