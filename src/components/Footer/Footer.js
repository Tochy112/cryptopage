import React from 'react'
import "./Footer.css"
import logo from "../../Assets/Logo (1).png"
import Visa_logo from "../../Assets/Visa.png"
import Master_logo from "../../Assets/Mastercard.png"
import Bitcoin_logo from "../../Assets/Bitcoin.png"
import linkedln from "../../Assets/linkedin 1.png"
import insta from "../../Assets/instagram 1.png"
import facebook from "../../Assets/facebook-f 1.png"
import twitter from "../../Assets/twitter 1.png"
import youtube from "../../Assets/youtube 1.png"
import {motion} from "framer-motion"
import {useScroll} from "../Scroll"
import {genAnimation} from "../animate"


const Footer = () => {
    const [element, controls] = useScroll()

  return (
    <footer
    ref={element}
    >
        <motion.div className='footer_wrapper'
         variants={genAnimation}
         animate={controls}
         transition={{
             delay: 0.03,
             type:"tween",
             duration: 0.8
         }}
        > 
            <a href="/" className='img_div'>
                <img src={logo} alt="logo" />
            </a>

            <div>
                <h3>Qick Link</h3>
                <p>Home</p>
                <p>Products</p>
                <p>About</p>
                <p>Features</p>
                <p>Contacts</p>
            </div>
            <div>
                <h3>Resources</h3>
                <p>Download Whitepaper</p>
                <p>Smart Token</p>
                <p>Blockchain Explorer</p>
                <p>Crypto API</p>
                <p>Interest</p>
            </div>

            <div className='payment'>
                <h2>We accept following <br /> payment systems</h2>
                <div>
                    <img src={Visa_logo} alt="visa" />
                    <img src={Master_logo} alt="mastercard" />
                    <img src={Bitcoin_logo} alt="bitcoin" />
                </div>
            </div>

        </motion.div>
        
        <div className='footer_connect'>
            <p>  2022 CRAPPO. All rights reserved</p>
            <div className='socials'>
                <img src={facebook} alt="facebook" />
                <img src={insta} alt="instagram" />
                <img src={youtube} alt="youtube" />
                <img src={twitter} alt="twitter" />
                <img src={linkedln} alt="linkedin" />
            </div>
        </div>
    </footer>
  )
}

export default Footer