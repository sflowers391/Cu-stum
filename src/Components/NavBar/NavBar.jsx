import React, {useState} from 'react';
import './navbar.css'
import {NavLink} from "react-router-dom"



const NavBar = () => {
   const [click, setClick] = useState(false);

   const handleClick = () =>setClick(!click);
    return(
              <section className='navBarSection'>
                <header className='header flex'>
            <div className='logoDiv'>
                <NavLink to="/" className="logo">
                    <h1 className='logoName'> <img alt='Logo' className='Cu-stum-logo' src="https://img.icons8.com/fluency/48/null/color-palette.png"/>Cu-stum</h1>
                </NavLink>
            </div>

            
                <ul className={click ? "navMenu active" : "navMenu"}>
                    <li className='navItem'>
                        <NavLink to='/' activeClassName='active' className='navLink' onClick={handleClick}>Home</NavLink>
                    </li>
                    <li className='navItem'>
                        <NavLink  to='/about' activeClassName='active' className='navLink' onClick={handleClick}>About Us</NavLink>
                    </li>
                    <li className='navItem'>
                        <NavLink  to='/faq' activeClassName='active' className='navLink'  onClick={handleClick}>FAQ</NavLink>
                    </li>
                </ul>

                <div className='nav-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
            
         </header>
        </section>
    )
    
}

export default NavBar