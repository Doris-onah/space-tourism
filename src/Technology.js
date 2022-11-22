import React from "react";
import Header from "./Header";
import data from "./crew.json";
import {useState} from "react";
import './Technology.css'
function Technology() {
    const [tech] = useState(data.technology)
const [value, setValue] = useState(0)

const {name, images, description} = tech[value]
    return (
        <div className="technology-page">
<Header/>

<div className="tech-con">
<div className="tech-title">
<h1>02 SPACE LAUNCH 101</h1></div>
<div className="term"> 
<div className="tech-main">
<div className="tech-btns">
                  {tech.map((item, index) => (
                      <button key={index} className="tech-button"
                        onClick={() => setValue(index)} > 
                        {index + 1}
                      </button>
                  ))}
                </div>
                <div className="tech-name">
<p className="role">THE TERMINOLOGY</p>
<h1>{name}</h1>
<p  style={{ whiteSpace: 'pre-wrap' }}>{description} </p>
</div>
</div>
<div className="tech-img">
<img src={images.portrait} alt={name}title={name} className="tech-mb"/>
</div>
</div>
</div>
        </div>
    )
}export default Technology