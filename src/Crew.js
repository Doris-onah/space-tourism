import React from "react";
import './Crew.css';
import { useState } from "react";
import data from "./crew.json"
import Header from "./Header";
function Crew() {

const [crews] = useState(data.crew)
const [value, setValue] = useState(0)
const {name,images, role, bio} = crews[value]


    
    return(
    
        <div className="crewpage" >
           <Header />
            <div className="crew-title"> <h1 className="title">02 MEET YOUR CREW</h1></div>
            <div className="crew-con">
           
                <div className="crew-con2">
<div className="crew-main"> 
<p className="role">{role}</p>
<h1>{name}</h1>
<p className="text-grey-400 bio" style={{ whiteSpace: 'pre-wrap' }}>{bio} </p>
<br/>
<br/>
<div className="crew-btns">
{crews && crews.map((crew, index)=> {
    return (
  <button className="crew-btn" key={index} onClick={() => setValue(index)}
  >{crew.index}</button>
    
    )
})}
</div>
</div>

<div className="crew-members" >  
    <img className="crew-img" src={images.png} alt={name} title={name} height="600px" max-width="100%" />
</div>
</div>
</div>
        </div>
      
    )
}export default Crew