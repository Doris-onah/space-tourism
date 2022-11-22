import React from "react";
import Header from "./Header";
import './Home.css'
function Home() {
    return (
        <div className="homepage" >
 <div className="home-header"><Header/></div>
 
 <div className="home-con">
 <div className="main">
    <div  className="home-main">
        <div className="home-context">
        <p>SO, YOU CAN TRAVEL TO</p>
        <h1 className="home-h1">SPACE</h1>
 <p>lets face it; if you want to go to space you might as well <br/>
 genuinely go to the outer space and not hover kind of on the <br/>
 edge on it. well sit back, and relax because we'll give you <br/>
 a truly out of this world experience!</p>
 </div>
</div>
 <div className="explore">
  <p> EXPLORE</p>
 </div>
</div>
 </div>
</div>
     
    )
}export default Home