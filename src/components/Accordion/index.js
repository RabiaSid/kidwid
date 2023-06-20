import React from "react";
import baseColors from "@/constant";



function Accordion() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div
        className="accordion-item"
      >
        <h2 className="accordion-header" id="flush-headingOne">
       
          <button
            className="accordion-button collapsed"
          
          style={{
              border:'2px solid' ,
              borderColor:baseColors.White,
              borderBottom:'0',
            }}

            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            What age group is KidWiz designed for?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
          style={{border:'none'}}
        >
          <div className="accordion-body"  style={{
            background: baseColors.White,
            color: baseColors.GreenColor
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
            risus, lacinia sit amet finibus sed, sagittis sed ligula. Praesent
            hendrerit cursus vestibulum.
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        style={{ background: baseColors.GreenColor, color: baseColors.White }}
      >
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed "
            style={{
              border:'2px solid' ,
              borderColor:baseColors.White,
              borderBottom:'0',
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            How does the AI-Powered Personalized Learning Companion work?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
          style={{border:'none'}}
        >
          <div className="accordion-body" style={{
            background: baseColors.White,
            color: baseColors.GreenColor
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
            risus, lacinia sit amet finibus sed, sagittis sed ligula. Praesent
            hendrerit cursus vestibulum.
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        style={{ background: baseColors.GreenColor, color: baseColors.White }}
      >
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed "
            style={{
              border:'2px solid' ,
              borderColor:baseColors.White,
              borderBottom:'0',
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            What subjects and skills does KidWiz cover?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
          style={{border:'none'}}
        >
          <div className="accordion-body" style={{
            background: baseColors.White,
            color: baseColors.GreenColor
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
            risus, lacinia sit amet finibus sed, sagittis sed ligula. Praesent
            hendrerit cursus vestibulum.
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        style={{ background: baseColors.GreenColor, color: baseColors.White }}
      >
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed "
            style={{
              border:'2px solid' ,
              borderColor:baseColors.White,
              borderBottom:'0',
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Can I use KidWiz alongside other early childhood education programs?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
          style={{border:'none'}}
        >
          <div className="accordion-body" style={{
            background: baseColors.White,
            color: baseColors.GreenColor
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
            risus, lacinia sit amet finibus sed, sagittis sed ligula. Praesent
            hendrerit cursus vestibulum.
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        style={{ background: baseColors.GreenColor, color: baseColors.White }}
      >
        <h2 className="accordion-header" id="flush-headingFive">
          <button
            className="accordion-button collapsed "
            style={{
              border:'2px solid' ,
              borderColor:baseColors.White,
              borderBottom:'0',
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            Is KidWiz compatible with different devices?
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
          style={{border:'none'}}
        >
          <div className="accordion-body" style={{
            background: baseColors.White,
            color: baseColors.GreenColor
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
            risus, lacinia sit amet finibus sed, sagittis sed ligula. Praesent
            hendrerit cursus vestibulum.
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        style={{ background: baseColors.GreenColor, color: baseColors.White }}
      >
        <h2 className="accordion-header" id="flush-headingSix">
          <button
            className="accordion-button collapsed "
            style={{
              border:'2px solid' ,
              borderColor:baseColors.White,
              borderBottom:'0',
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
            How do I choose the right subscription plan for my family?
          </button>
        </h2>
        <div
          id="flush-collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingSix"
          data-bs-parent="#accordionFlushExample"
          style={{border:'none'}}
        >
          <div className="accordion-body" style={{
            background: baseColors.White,
            color: baseColors.GreenColor
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
            risus, lacinia sit amet finibus sed, sagittis sed ligula. Praesent
            hendrerit cursus vestibulum.
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        style={{ background: baseColors.GreenColor, color: baseColors.White }}
      >
        <h2 className="accordion-header" id="flush-headingSeven">
          <button
            className="accordion-button collapsed "
            style={{
              border:'2px solid' ,
              borderColor:baseColors.White,
              borderBottom:'0',
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSeven"
            aria-expanded="false"
            aria-controls="flush-collapseSeven"
          >
            How do I cancel or change my subscription plan?
          </button>
        </h2>
        <div
          id="flush-collapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingSeven"
          data-bs-parent="#accordionFlushExample"
          style={{border:'none'}}
        >
          <div className="accordion-body" style={{
            background: baseColors.White,
            color: baseColors.GreenColor
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
            risus, lacinia sit amet finibus sed, sagittis sed ligula. Praesent
            hendrerit cursus vestibulum.
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        style={{ background: baseColors.GreenColor, color: baseColors.White }}
      >
        <h2 className="accordion-header" id="flush-headingEight">
          <button
            className="accordion-button collapsed "
            style={{
              border:'2px solid' ,
              borderColor:baseColors.White,
              borderBottom:'0',
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseEight"
            aria-expanded="false"
            aria-controls="flush-collapseEight"
          >
            Is my child's data safe with KidWiz?
          </button>
        </h2>
        <div
          id="flush-collapseEight"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingEight"
          data-bs-parent="#accordionFlushExample"
          style={{border:'none'}}
        >
          <div className="accordion-body" style={{
            background: baseColors.White,
            color: baseColors.GreenColor
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
            risus, lacinia sit amet finibus sed, sagittis sed ligula. Praesent
            hendrerit cursus vestibulum.
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        style={{ background: baseColors.GreenColor, color: baseColors.White }}
      >
        <h2 className="accordion-header" id="flush-headingNine">
          <button
            className="accordion-button collapsed "
            style={{
              border:'2px solid' ,
              borderColor:baseColors.White,
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseNine"
            aria-expanded="false"
            aria-controls="flush-collapseNine"
          >
            How can I get in touch with KidWiz for additional support or questions?
          </button>
        </h2>
        <div
          id="flush-collapseNine"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingNine"
          data-bs-parent="#accordionFlushExample"
          style={{border:'none'}}
        >
          <div className="accordion-body" style={{
            background: baseColors.White,
            color: baseColors.GreenColor
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
            risus, lacinia sit amet finibus sed, sagittis sed ligula. Praesent
            hendrerit cursus vestibulum.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
