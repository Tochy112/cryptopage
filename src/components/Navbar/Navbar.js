import React from 'react'
import "./Navbar.css"
import Btn from "../Button/Button"
import logo from "../../Assets/Logo (1).png"
import {Link} from "react-router-dom"
import { useState } from 'react'
import { HiMenu  } from 'react-icons/hi';
import {AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [expanded, setExpanded] = useState(false)

  return (
    <div className='wrapper'>
        <div className='navbar'>
            <Link to="/"  className='navbar-brand'><img src={logo} alt="logo"/></Link>
            <nav
                className={expanded ? "nav" : "nav-active"}
                onClick={() => setExpanded(!expanded)}
            >

                <div className='btn_close'>
                    <AiOutlineClose />
                </div>
                
                <ul>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/">Features</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    <div className='register_links'>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                        <Link to="/"><Btn content="Register" /></Link>
                        </li>
                    </div>
                   
                </ul>
            </nav>

            <div className='menu' >
                <HiMenu 
                onClick = {() => setExpanded(!expanded)}
                />
            </div>
        </div>
    </div>
  )
}

export default Navbar