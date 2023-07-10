import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "../styles/navbar.css"
//if we use annchor tag page reloading takes place that is why we are going to be use navlink
const Navbarapp = () => {
  return (
    <nav>
        <div className='nav'> 
            <div className='logo'> <HashLink to="/#home">MyApp</HashLink> </div>
            <div className='nav-links'>               
                    <li><HashLink to="/" > Home</HashLink></li>
                    <li><HashLink to="/#about" >About </HashLink></li>
                    <li><NavLink to="/Contact" >Contact </NavLink></li>
                    <li><NavLink to="/Services" > Services</NavLink></li>
                    <li><HashLink to="/#brands" > brands</HashLink></li>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbarapp