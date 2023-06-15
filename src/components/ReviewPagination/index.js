import React from "react";
import { BlueFlower1 } from "@/assets";
import { styles } from "@/styles/style";
import baseColors from "@/constant";
import ReviewCard from "@/components/card/Reviewcard";

function ReviewPagination() {
  return (
    <div
      id="myCarousel"
      className="carousel slide "
      data-bs-ride="carousel"
      style={{ border: "3px solid red" }}
    >
      <div
        className="row d-flex justify-content-center m-0 py-5 p-0 "
        style={{
          background: baseColors.backgroundLight,
        }}
      >
        <div className="col-12 col-md-11 col-lg-8  m-0">
          <div className="row m-0 d-flex justify-content-center align-items-start ">
            <div className="col-12 col-md-8 col-xl-7 d-flex justify-content-start align-items-center ps-0 me-auto  pt-5 pt-md-0">
              <div className="row m-0">
                <div className="text-left py-3 m-0 p-0 ">
                  <text style={styles.Text2bold}>
                    Don't take our word for It: Uncover the Life-Changing Impact
                    of KidWiz on Families
                  </text>
                </div>
                <div>
                  <a
                    className="carousel-control-prev"
                    href="#myCarousel"
                    data-bs-slide="prev"
                    style={{ border: "3px solid purple" }}
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    data-bs-slide="next"
                    style={{ border: "3px solid purple" }}
                  >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
                <div className="">
                  <ol
                    className="carousel-indicators"
                    style={{ border: "3px solid black" }}
                  >
                    <li
                      data-bs-target="#myCarousel"
                      data-bs-slide-to="0"
                      className="active"
                    ></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                  </ol>
                </div>
                <div className="col-4 text-justify py-1 m-0 p-0 ">
                  <img
                    src={BlueFlower1}
                    style={{ height: "10vh", width: "auto" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xl-5 d-flex justify-content-center">
              <div
                className="carousel-inner"
                style={{ border: "3px solid orange" }}
              >
                <div className="carousel-item active">
                  <ReviewCard alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <ReviewCard alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <ReviewCard alt="Slide 3" />
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: baseColors.GreenColor }}></div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPagination;

{
  /*//     <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" style={{border:'3px solid red'}}>
//    
    <ol className="carousel-indicators" style={{border:'3px solid white'}}>
        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
    </ol>

//     
    // <div className="carousel-inner" style={{border:'3px solid orange'}}>
    //     <div className="carousel-item active">
    //         <img src="https://showwp.com/demos/ws-garden/upload/blog_single_01.jpg" className="d-block w-100" alt="Slide 1"/>
    //     </div>
    //     <div className="carousel-item">
    //         <img src="https://showwp.com/demos/ws-garden/upload/blog_single_02.jpg" className="d-block w-100" alt="Slide 2"/>
    //     </div>
    //     <div className="carousel-item">
    //         <img src="https://showwp.com/demos/ws-garden/upload/blog_single_01.jpg" className="d-block w-100" alt="Slide 3"/>
    //     </div>
    // </div>

//     
    // <a className="carousel-control-prev" href="#myCarousel" data-bs-slide="prev" style={{border:'3px solid purple'}}>
    //     <span className="carousel-control-prev-icon"></span>
    // </a>
    // <a className="carousel-control-next" href="#myCarousel" data-bs-slide="next" style={{border:'3px solid purple'}}>
    //     <span className="carousel-control-next-icon"></span>
    // </a>
 </div> */
}
