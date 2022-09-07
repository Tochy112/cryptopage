import React from 'react'
import {motion} from "framer-motion"
import {useScroll} from "../Scroll"
import {genAnimation} from "../animate"
import Btn from '../Button/Button'


const Calculate = () => {
    const [element, controls] = useScroll()

  return (
    <div>
        <section className='calculate'
        ref={element}
        >
            <motion.div className='calculate_box'
            
             variants={genAnimation}
             animate={controls}
             transition={{
                 delay: 0.03,
                 type:"tween",
                 duration: 0.8
             }}
            >
                <div className='check_input'>
                    <input type="text" placeholder='Enter your hash rate' />
                    <select>
                        <option value="TH/s" selected>TH/s</option>
                    </select>
                    <Btn content="Calculate" />
                </div>

                <div className='write_up'>
                    <p>ESTIMATED 24 HOUR REVENUE:</p>
                    <p>0.055 130 59 ETH <span>($1275)</span></p>
                    <small>Revenue will change based on mining difficulty and Ethereum price.</small>
                </div>
            </motion.div>
        </section>
    </div>
  )
}

export default Calculate