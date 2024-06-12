import React, { useEffect, useState } from 'react'
import binn from '../asset/binn.png'
import browser from '../asset/browser.png'
import clutter from '../asset/Systemclutter.png'
import duplicate from '../asset/duplicate.png'
import shortcuts from '../asset/shortcuts.png'
import star from '../asset/staaar.png'
import arrow from '../asset/arrow.png'
import { useNavigate } from 'react-router-dom'
import CircleProgress from './CircleProgress';


export default function Index() {
const [isSectionVisible, setIsSectionVisible] = useState(false);
const [isExpanded, setIsExpanded] = useState(false);
const [isExpanded1, setIsExpanded1] = useState(false);
const [isExpanded2, setIsExpanded2] = useState(false);
const [isExpanded3, setIsExpanded3] = useState(false);
const [isExpanded4, setIsExpanded4] = useState(false);
const [isExpanded5, setIsExpanded5] = useState(false);
const [currentDivIndex, setCurrentDivIndex] = useState(0);
const[popup, setpopup] =useState(false)
const navigate =useNavigate()

const data = [
    { title: 'Recycle Bin', message: 'Scanning your machine bin, please wait.', imgSrc: binn },
    { title: 'Browser Cashe', message: 'Processing second item...', imgSrc: browser },
    { title: 'System Clutter', message: 'Processing third item...', imgSrc: clutter },
    { title: 'duplicate files', message: 'Processing fourth item...', imgSrc: duplicate },
    { title: 'Invalid Shortcuts', message: 'Processing fifth item...', imgSrc: shortcuts },
    { title: 'Boost startup', message: 'Processing sixth item...', imgSrc: binn }
  ];

  useEffect(() => {
    if (currentDivIndex < data.length - 1) {
      const timer = setTimeout(() => {
        setCurrentDivIndex((prevIndex) => prevIndex + 1);
      }, 4000); 
      return () => clearTimeout(timer); 
    }
  }, [currentDivIndex, data.length]);

  const gototscanpage =()=>{
    if(!popup){
        setpopup(true)
    }
  }
const onClickofyes =()=>{
    navigate('/')
}

const handleScroll = () => {
  if (!isSectionVisible) {
    setIsSectionVisible(true);
  } else {
    setIsSectionVisible(false);
  }
};

const toggleHeight = () => {
  setIsExpanded(!isExpanded);
};
const toggleHeight1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const toggleHeight2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const toggleHeight3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  const toggleHeight4 = () => {
    setIsExpanded4(!isExpanded4);
  };
  const toggleHeight5 = () => {
    setIsExpanded5(!isExpanded5);
  };

  return (
    <>
    
  
   <div className='onlyforbgtest1'>
   
    <div className='parent2'>
       <img src={star} alt=""  className='stars' />
        <div className='designpdiv'>
        <h2 className='againspan'>Mac Cleanup</h2>
        <span className='againh22'>Delete temporary files created by applications or downloaded from the internet</span>       
        </div>             
    </div>

    <div onClick={gototscanpage}>
        <div className='hforbacklogo'>
            <img src={arrow} alt="" />
        </div>
    </div> 

   <div className='mainpdiv'>
    <div className='pofeverymain'>
    <div className='main1'>
        <div className='child'>
            <div className='divdesignn'>
                 <img src={binn} alt=""  className='designgif2'/>
                <div className='givingmargin'>
                    <h2 className='h2class'>Recycle Bin</h2>
                    <span className='spanclass'>scanning your machine bin do wait</span>
                </div>
                <button className='btndesign' onClick={toggleHeight}>{isExpanded ? 'hide' : 'view'}</button>
            </div>
            
        </div>
        <div className='child'>
        <div className='divdesignn'>
                 <img src={clutter} alt=""  className='designgif2'/>
                <div className='givingmargin'>
                    <h2 className='h2class'>System junk</h2>
                    <span className='spanclass'>scanning your machine bin do wait</span>
                </div>
                <button className='btndesign' onClick={toggleHeight1}>{isExpanded1 ? 'hide' : 'view'}</button>
            </div>
        </div>
    </div>

    <div className='main1'>
        <div className='child'>
            <div className='divdesignn'>
                 <img src={browser} alt=""  className='designgif1'/>
                <div className='browserdata'>
                    <h2 className='h2class'>Flush Dns cashe</h2>
                    <span className='spanclass'>scanning your machine bin do wait</span>
                </div>
                <button className='btndesign' onClick={toggleHeight2}>{isExpanded2 ? 'hide' : 'view'}</button>
            </div>
            
        </div>
        <div className='child'>
        <div className='divdesignn'>
                 <img src={shortcuts} alt=""  className='designgif2'/>
                <div className='givingmargin'>
                    <h2 className='h2class'>Invalid Shortcuts</h2>
                    <span className='spanclass'>scanning your machine bin do wait</span>
                </div>
                <button className='btndesign' onClick={toggleHeight3}>{isExpanded3 ? 'hide' : 'view'}</button>
            </div>
        </div>
    </div>

    <div className='main1'>
        <div className='child'>
            <div className='divdesignn'>
                 <img src={duplicate} alt=""  className='designgif' style={{marginTop:'4px'}}/>
                <div>
                    <h2 className='h2class'>Duplicate Files</h2>
                    <span className='spanclass'>scanning your machine bin do wait</span>
                </div>
                <button className='btndesign' onClick={toggleHeight4}>{isExpanded4 ? 'hide' : 'view'}</button>
            </div>
            
        </div>
        {/* <div className='child'>
        <div className='divdesignn'>
                 <img src={binn} alt=""  className='designgif2'/>
                <div className='givingmargin'>
                    <h2 className='h2class'>Boost Startup</h2>
                    <span className='spanclass' >scanning your machine bin do wait</span>
                </div>
                <button className='btndesign' onClick={toggleHeight5}>{isExpanded5 ? 'hide' : 'view'}</button>
            </div>
        </div> */}
    </div>
    
    </div>
   <div className='pofeverymain1'>
     <div className='semicircle'>
     </div>
     <div className='semicircleAGAIN'>
        <p className='pofcircle'>20.4 GB</p>
        <span className='spanofcircle'>save your disk </span>

     </div>
   <p className='thisispmeanpara' >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   </p>
   {isExpanded && (
            <div className='section' >
            <div className='divdesignn'>
            <img src={binn} alt=""  className='designgif2'/>
            <h2 className='h2class1'>Recycle Bin</h2>
            <h2 className='h2class11'>1.5 GB</h2>
            </div>
            <table class="table">
  <thead>
  </thead>
  <tbody>  
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
    </tr>
  </tbody>
            </table>
            </div>
    )} 
    {isExpanded1 && (
             <div className='section' >
             <div className='divdesignn'>
             <img src={clutter} alt=""  className='designgif2'/>
             <h2 className='h2class10'>System clutter</h2>
             <h2 className='h2class11'>1.5 GB</h2>
             </div>
             <table class="table">
   <thead>
   </thead>
   <tbody>  
     <tr>
       <th scope="row">3</th>
       <td colspan="2">Larry the Bird</td>
     </tr>
   </tbody>
             </table>
             </div>
    )} 
  
     {isExpanded2 && (
             <div className='section' >
             <div className='divdesignn'>
             <img src={browser} alt=""  className='designgif1'/>
             <h2 className='h2class10'>Browser Cashe</h2>
             <h2 className='h2class11'>1.5 GB</h2>
             </div>
             <table class="table">
   <thead>
   </thead>
   <tbody>  
     <tr>
       <th scope="row">3</th>
       <td colspan="2">Larry the Bird</td>
     </tr>
   </tbody>
             </table>
             </div>
    )} 
     {isExpanded3 && (
             <div className='section' >
             <div className='divdesignn'>
             <img src={shortcuts} alt=""  className='designgif2'/>
             <h2 className='h2class10'>Invalid Shortcuts</h2>
             <h2 className='h2class11'>1.5 GB</h2>
             </div>
             <table class="table">
            <thead>
             </thead>
             <tbody>  
              <tr>
              <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
             </tr>
             </tbody>
             </table>
             </div>
    )} 
    {isExpanded4 && (
             <div className='section' >
             <div className='divdesignn'>
             <img src={duplicate} alt=""  className='designgif' style={{marginTop:'4px'}}/>
             <h2 className='h2class10'>Duplicate Files</h2>
             <h2 className='h2class11'>1.5 GB</h2>
             </div>
             <table class="table">
   <thead>
   </thead>
   <tbody>  
     <tr>
       <th scope="row">3</th>
       <td colspan="2">Larry the Bird</td>
     </tr>
   </tbody>
             </table>
             </div>
    )} 
     {/* {isExpanded5 && (
             <div className='section' >
             <div className='divdesignn'>
             <img src={clutter} alt=""  className='designgif2'/>
             <h2 className='h2class10'>Boost Startup</h2>
             <h2 className='h2class11'>1.5 GB</h2>
             </div>
             <table class="table">
   <thead>
   </thead>
   <tbody>  
     <tr>
       <th scope="row">3</th>
       <td colspan="2">Larry the Bird</td>
     </tr>
   </tbody>
             </table>
             </div>
    )}  */}
   </div>

   </div>
   <div className='fixed-bottom'>
        <div  className="child11">
          <CircleProgress/>
            {/* <button className='subchild11'>Review and Clean up</button> */}
        </div>
    </div>
    </div> 
 


      {popup && (
        <div className="section1">
<div className='designingclosed' onClick={(e) => setpopup(false)}>
              <span className="close"></span>
            </div>
    
     <div className="lom">
         <span style={{fontSize:'11px'}} >Do You Really Want to Rescan Your Macbook,<br/> Then Click On Yes Button</span>
         </div>
    <div>
    <button onClick={onClickofyes}>Yes</button>
    <button onClick={(e) => setpopup(false)}>No</button>
    </div>
    </div>

  
      )

      }

      {/* <div className='fixed-bottom'>
        <div  className="child1">
        {data.map((item, index) => (
          <div  key={index} className={`divdesignnnew${index + 1}`} style={{ display: index === currentDivIndex ? 'flex' : 'none' }}>
            <img src={item.imgSrc} alt="" className='designgif' style={{marginLeft:'2vw'}}/>
            <div className='newclassofbottom'>
              <h2 className='h2class'>{item.title}</h2>
              <span className='spanclass'>{item.message}</span>
            </div>
          </div>
              ))}
        </div>
      </div>    */}
    </>
  )
}