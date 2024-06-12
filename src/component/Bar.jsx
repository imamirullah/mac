import React from 'react';
import '../component/First.css';
import moniter1 from '../assest/moniter1.png';
import images1removebgpreview from '../assest/images1removebgpreview.png';
import imagesremovebgpreview from '../assest/imagesremovebgpreview.png';
import clockremovebgpreview from '../assest/clockremovebgpreview.png';

const Bar = () => {
    return (
        <>
            <div className="progress">
                <img src={moniter1} alt="monitor" />
                <div className="right">
                    <span style={{ marginLeft: '-68%', fontSize: '25px', fontFamily: 'sans-serif', fontWeight: 600 }}>
                        Well done!
                    </span>
                    <br />
                    <span style={{ marginLeft: '-51%', lineHeight: 0, marginTop: '-17px' }}>
                        your mac is in great shape.
                    </span>
                    <div className="mt">
                        <div className="icn">
                            <div className="flex">
                                <img src={images1removebgpreview} alt="unneeded junk removed" />
                                2.99 GB
                                <br />
                                unneeded junk removed
                            </div>
                        </div>
                        <div className="icn">
                            <div className="flex">
                                <img src={imagesremovebgpreview} alt="Deep Scan recommended" />
                                Deep Scan recommended
                                <br />
                                No immediate threats Found, but a deep scan highly recommended
                            </div>
                            <div className="icn-btn">
                                <button>Run deep clean</button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="icn">
                                <div className="flex">
                                    <img src={clockremovebgpreview} alt="Performance topped out" />
                                    {/* <span>3 Tasks </span>
                                    <p style={{ marginTop: '23px', marginLeft: '-18%' }}>
                                        Performance topped out
                                    </p> */}
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
    );
}

export default Bar;
