import React from "react";
import "../component/First.css";
import "../assest/Bar.css";
import moniter1 from "../assest/moniter1.png";

const New = () => {
  return (
    <>
      <div className="miii">
        <div className="margin">
          <div className="w3-container w3-center w3-animate-left new-pic">
            <img src={moniter1} alt="Monitor" />
          </div>
          <div className="txt">
            <div className="loader slide-right"></div>
            <div className="Escape">Welcome</div>
            <div className="Escape last">
              <span>to Clean My Mac .</span>
            </div>
            <p>Start with a nice and through Scan of Your Mac</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
