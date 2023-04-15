import React from 'react'
import "./Navbar.css"
import { useState } from "react";


export const Navbar = () => {
    const [isVisible,setisVisible] = useState(false)
  return (
    <div >
    <nav  className='flex'>
        <div className="logo_wrapper">
             <span>FIT</span><span className="txt_stroke logo_custom">LAB</span>
        </div>
        <div className="nav_links ">
        <ul className='flex '>
            <li>HOME</li>
            <li>OUR COACHES</li>
            <li>GALLERY</li>
            <li>TESTIMONIALS</li> 
            <li>CONTACT US</li> 
        </ul>
        
        </div>
        { isVisible &&
           <div class="animated_menu_bar active" onClick={()=> setisVisible(!isVisible)} >
					<div id="one"></div>
					<div id="two"></div>
					<div id="three"></div>
				</div>
}
{ !isVisible &&
           <div class="animated_menu_bar "  onClick={()=> setisVisible(!isVisible)}>
					<div id="one"></div>
					<div id="two"></div>
					<div id="three"></div>
				</div>
}
        </nav>
       
    </div>
  )
}
