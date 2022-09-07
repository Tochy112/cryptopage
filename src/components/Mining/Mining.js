import React from 'react'
import {motion} from "framer-motion"
import {useScroll} from "../Scroll"
import {genAnimation} from "../animate"


const Mining = () => {
    const [element, controls] = useScroll()

  return (
    <div>
        <section className='mining'
        ref={element}
        >
            <motion.div className='mining_box'
            variants={genAnimation}
            animate={controls}
            transition={{
                delay: 0.03,
                type:"tween",
                duration: 0.8
            }}
            >
                <div className='write_up'>
                    <h2>Start mining now</h2>
                    <p>Join now with CRAPPO to get the latesr news <br />and start mining now</p>
                </div>

                <input type="text" placeholder='Enter your email' />
                <button>Subscribe</button>
            </motion.div>
        </section>
    </div>
  )
}

export default Mining