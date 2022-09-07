import React from 'react'
import "./Navbar.css"
import Btn from "../Button/Button"
import logo from "../../Assets/Logo (1).png"
import { useState } from 'react'
import { HiMenu  } from 'react-icons/hi';
import {AiOutlineClose } from 'react-icons/ai';
import { navAnimation } from "../animate";
import { useScroll } from "../../components/Scroll";
import { motion } from "framer-motion";

const Navbar = () => {

    const [expanded, setExpanded] = useState(true)
    const [element, controls] = useScroll();

  return (
    <div className='wrapper'>
        <div className='navbar'>
            <a href="/"  className='navbar-brand'><img src={logo} alt="logo"/></a>
            <motion.nav
                ref={element}
                variants={navAnimation}
                transition={{ delay: 0.1 }}
                animate={controls} 
                state={expanded ? 0 : 1}
                className={expanded ? "nav" : "nav-active"}
                onClick={() => setExpanded(!expanded)}
            >

                <div className='btn_close'>
                    <AiOutlineClose />
                </div>
                
                <ul                
                >
                    <li>
                        <a href="/">Products</a>
                    </li>
                    <li>
                        <a href="/">Features</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                    <div className='register_links'>
                        <li>
                            <a href="/">Login</a>
                        </li>
                        <li>
                        <a href="/"><Btn content="Register" /></a>
                        </li>
                    </div>
                   
                </ul>
            </motion.nav>

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