import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import "../component/Main.css";
import top from "../assest/logo.png";
import picimage from "../assest/logo1.png";
import { invoke } from "@tauri-apps/api/tauri";
// import CircleProgress from './CircleProgress';
import binn from "../assest/binn.gif";
// import CircleProgress from './CircleProgress';
// import Ciclep from "./Ciclep";

export default function Main() {
  const [percentage, setPercentage] = useState(0);
  const [trashContents, setTrashContents] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevWidth) => {
        if (prevWidth >= 100) {
          return 0;
        }
        return prevWidth + 1;
      });
    }, 30);
    setTimeout(() => {
      navigate("/index");
    }, 8000000000000000);
    return () => clearInterval(interval);
  }, []);

  const gotoindex = () => {
    navigate("/index");
  };

  useEffect(() => {
    fetchTrashContents();
    cashefdata();
    fetchFolderContents();
    logdata();
  }, []);
  const fetchTrashContents = async () => {
    console.log("hello from macos");
    try {
      console.log("hello trash");
      const result = await invoke("list_trash_contents");
      console.log("trash ", result);
      setTrashContents(result);
    } catch (error) {
      console.error("Failed to fetch trash contents:", error);
      setTrashContents("Error fetching trash contents");
    }
  };
  const a = async () => {
    navigate("/index");
    // const res = await invoke('empty_trash')
    // console.log("data deleted successfully", res)
  };

  const cashefdata = async () => {
    const result = await invoke("list_cache_files");
    console.log("cache data", result);
  };
  const fetchFolderContents = async () => {
    try {
      const summary = await invoke("list_folder_contents");
      console.log("Entries:", summary);
      console.log("Total Files:", summary.total_files);
      console.log("Total Size:", summary.total_size);
    } catch (error) {
      console.error("Failed to fetch folder contents", error);
    }
  };

  const logdata = async () => {
    try {
      const res = await invoke("list_log_contents");
      console.log("log data", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <div className='macheading'>
    <img src={top} alt="" className='designgif1' /> 
    <span className='letsbuildspanagain'>MacCleaner</span>
    </div> */}
      {/* <div className='parent'>    
     <div className="centre">
     <div className="designingpbutton">
            <div className='btnscooking' > <span> Mac Data</span></div>
            <div className='btnscooking1'><b style={{color:'white'}}>200 gb</b> availble of 500gb</div>
        </div>
     <div className="w3-light-grey">
          <div className="w3-blue" style={{ height: '24px', width: `${percentage}%` }}></div>
        </div>
      </div>  
     </div> */}
      <div className="onlyforbgtest">
        <div className="topheadings">
          <span className="spanofonlyforbg">
            Remove Junk files and speed up Mac
          </span>
        </div>
        <div className="secondpartodmain">
          <div className="secondpartodmain1">
            <img src={picimage} alt="" className="newlogosssx" />
            <div className="ciecledes">{/* <Ciclep/> */}</div>
          </div>
          <div className="secondpartodmain2">
            <div className="minenew">
              {/* <img src={binn} alt="" /> */}
              <div className="divdesignn">
                <img src={binn} alt="" className="designgif22" />
                <div className="givingmargin">
                  <h2 className="h2class">Recycle Bin</h2>
                  <span className="spanclass">
                    scanning your machine bin do wait
                  </span>
                </div>
                <p className="btndesoncegain">23 GB</p>
              </div>
            </div>
            <div className="minenew1">
              <div className="divdesignn">
                <img src={binn} alt="" className="designgif22" />
                <div className="givingmargin">
                  <h2 className="h2class">System junk</h2>
                  <span className="spanclass">
                    scanning your machine bin do wait
                  </span>
                </div>
                <p className="btndesoncegain">23 GB</p>
              </div>
            </div>
            <div className="minenew1">
              <div className="divdesignn">
                <img src={binn} alt="" className="designgif22" />
                <div className="givingmargin">
                  <h2 className="h2class">Flush Dns cashe</h2>
                  <span className="spanclass">
                    scanning your machine bin do wait
                  </span>
                </div>
                <p className="btndesoncegain">23 GB</p>
              </div>
            </div>
            <div className="minenew1">
              <div className="divdesignn">
                <img src={binn} alt="" className="designgif22" />
                <div className="givingmargin">
                  <h2 className="h2class">Memory Freeup</h2>
                  <span className="spanclass">
                    scanning your machine bin do wait
                  </span>
                </div>
                <p className="btndesoncegain">23 GB</p>
              </div>
            </div>
            <button className="debtnofmain" onClick={a}>
              review details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
