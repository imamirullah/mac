import React from "react";
import "../component/First.css";
import malware from "../assest/animation.png";
import CircleProgress from "./CricleProgress";
const Anti = () => {
  return (
    <>
      {/* <div>
        <img className="anti-pic" src={malware} alt="" />
      </div>
      <span className="Looking">Looking for malware</span> */}
      <div class="ghost-parallax-container">
        <div class="ghost-position">
          <div class="ghost">
          </div>
            <img className="anti-pic" src={malware} alt="" />
        </div>
        <div>
          <span className="detect">Detecting Antivirus</span>
        </div>
        <div className="cont">
          <span>Looking For Malware</span>
          <span className="Looking">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            natus cupiditate molestias reprehenderit aliquid nulla!
          </span>
          <span className="mtt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>

        <div className="start">
          <button className="stop">
            <span className="circle-btn">
              <CircleProgress />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Anti;
