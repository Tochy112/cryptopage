import React from 'react'
import {motion} from "framer-motion"
import {useScroll} from "../Scroll"
import {genAnimation} from "../animate"
import stat from "../../Assets/Statistic.png"
import Btn from '../Button/Button'


const Statistics = () => {
    const [element, controls] = useScroll()

  return (
    <div>
        <section className="statistics"
        ref={element}
        >

            <motion.div className='statistics_content'
            variants={genAnimation}
            animate={controls}
            transition={{
                delay: 0.03,
                type:"tween",
                duration: 0.8
            }}
            >
                <div className='img_div'>
                    <img src={stat} alt="chart" />
                </div>

                <div>
                    <h3>Detailed Statistics</h3>
                    <p>
                        View all mining related information in realtime, at any 
                        point at any <br /> location and decide which polls you want <br /> 
                        to mine in. 
                    </p>
                    <Btn content="Learn More" />
                </div>
            </motion.div>
        </section>
    </div>
  )
}

export default Statistics