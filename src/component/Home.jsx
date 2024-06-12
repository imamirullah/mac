import React from 'react';
import '../component/First.css';
import moniter1 from '../assest/moniter1.png';
import images1removebgpreview from '../assest/images1removebgpreview.png';
import imagesremovebgpreview from '../assest/imagesremovebgpreview.png';
import clockremovebgpreview from '../assest/clockremovebgpreview.png';

export default function Home() {
  return (
    <>
      <div className="progress">
        <div className="w3-container w3-center w3-animate-left-bottom conatiner" >
          <img src={moniter1} alt="Monitor" className="bottom-up-animation" />
        </div>
        <div className="right w3-container w3-center w3-animate-left">
          <span className='well home' style={{ marginRight: '58%', fontSize: '25px', fontFamily: 'sans-serif', fontWeight: 600 }}>
            Well done!
          </span>
          <br />
          <span className='shape' style={{ marginRight: '40%', fontSize: '13px', marginTop: '-27px' }}>
            your mac is in great shape.
          </span>
          <div className="mt">
            <div className="icn">
              <div className="relax">
                <img className='imgesofhome' src={images1removebgpreview} alt="unneeded junk removed" />
                2.99 GB
                <br />
                unneeded junk removed
              </div>
            </div>
            <div className="icn">
              <div className="relax">
                <img className='imgesofhome' src={imagesremovebgpreview} alt="Deep Scan recommended" />
                Deep Scan recommended
                <br />
                No immediate threats Found, but a deep scan highly recommended
              </div>
              <div className="icn-btn">
                <button className='icn-btnn'>Run deep clean</button>
              </div>
            </div>
            <div className="mt-2">
              <div className="icn">
                <div className="relax">
                  <img className='imgesofhome' src={clockremovebgpreview} alt="Performance topped out" />
                  3 Tasks
                  <br />
                  Performance topped out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
