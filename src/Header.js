import React from "react";
import './Header.css';
import iconhamburger from './iconhamburger.svg';
import iconclose from './iconclose.svg'
import {Link} from "react-router-dom";
import spacelogo from "./spacelogo.svg"
import {useState} from "react"
function Header() {

    const [open, setOpen] = useState(false);

    return (
        <div className="header">
            <div className="logo">
            <img src={spacelogo} alt="spacelogo" className="logo-mb" />
            </div>
           
           <div onClick={() => setOpen(!open)} className="nav-icon">
           {open ? <div className="iconham"><img src={iconclose} alt="iconclose" /></div> :
           <div className="iconham"><img src={iconhamburger} alt="iconopen" /></div> }
           </div>
           
            <div className={open? 'nav-items active' : 'nav-items'}>
                <ul >
         <li> <Link  to="/" className="nav" onClick={() => setOpen(false)}>00 HOME</Link> </li>
         <li>  <Link to="/destination" className="nav" onClick={() => setOpen(false)}>01 DESTINATION</Link></li>
         <li><Link to="/crew" className="nav" onClick={() => setOpen(false)}>02 CREW</Link></li>
         <li>  <Link to="/technology" className="nav" onClick={() => setOpen(false)}>03 TECHNOLOGY</Link></li>
           </ul>
           </div>
           </div>
           
           
    
    )
}export default Header