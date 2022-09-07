import React from 'react'
import {motion} from "framer-motion"
import {useScroll} from "../Scroll"
import {genAnimation} from "../animate"
import profit from "../../Assets/profit.png"
import Btn from '../Button/Button'



const Profit = () => {
    const [element, controls] = useScroll()

  return (
    <div>
        <section className="profit"
        ref={element}
        >
            <motion.div className='profit_content'
             variants={genAnimation}
             animate={controls}
             transition={{
                 delay: 0.03,
                 type:"tween",
                 duration: 0.8
             }}
            >
                <div>
                    <h3>Grow your profit and track <br /> your investments</h3>
                    <p>
                        Use advanced analytical tools. Clear TradingView <br /> charts 
                        let you track current and historical profit <br /> investments. 
                    </p>
                    <Btn content="Learn More" />
                </div>

                <div className='img_div'>
                    <img src={profit} alt="profit" />
                </div>
            </motion.div>
        </section>
    </div>
  )
}

export default Profit