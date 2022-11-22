import React from "react";
import './Destination.css';
import data from "./crew.json"
import { useState } from "react";
import Header from "./Header";

function Destination() {
    const [dest] = useState(data.destinations)
const [value, setValue] = useState(0)
const {name,images,description,distance,travel} = dest[value]
    return(
        <div className="destination-page">
        <Header/>
        
            <div className="destination-con">
                <div>
              <div className="dest-title"> <h1 >03 PICK YOUR DESTINATION</h1></div>
            <br/>
            <br/>
                <div className="moon-spin"> <img className="moon" src={images.png} alt={name} title={name}
                  height="500px" width="500px" /></div>
                  </div>
                 
<div className="text-mb">
<br/>
                  <br/>
                  <br/>
                  <div  className="main-destination">
                  <div className="main-con">
<div className="moon-detail">
                  <div className="btns"> 
    {dest && dest.map((destination, index)=> {
    return (
     
  <button key={index} onClick={() => setValue(index)} className="btns"
  >{destination.name}</button> 
    )
})}
</div>
    <h1 className="text-mb">{name}</h1>
<p className="text-mb" style={{ whiteSpace: 'pre-wrap' }} >{description}</p>
<hr/>
  <div className="footer"> 
    <div className="avg" >AVG.DISTANCE 
    <p>{distance}</p></div>
    <div className="travel">
  TRAVEL TIME 
  <p >{travel}</p>
  </div>  
    </div>
</div>
</div>
</div>
</div>
 
</div>
        </div>
      
    )
}export default Destination