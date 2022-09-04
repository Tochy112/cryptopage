import React from 'react'
import "./Navbar.css"
import Btn from "../Button/Button"
import logo from "../../Assets/Logo (1).png"

const Navbar = () => {
  return (
    <div className='wrapper'>
        <div className='navbar'>
            <a href="/"  className='navbar-brand'><img src={logo} alt="logo"/></a>
            <nav>
                <ul>
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
                    <li>
                        <a href="/">Login</a>
                    </li>
                    <li>
                       <a href="/"><Btn content="Register" /></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar