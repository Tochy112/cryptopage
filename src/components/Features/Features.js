import React from 'react'
import chart from "../../Assets/Chart.png"
import {motion} from "framer-motion"
import {useScroll} from "../Scroll"
import {genAnimation} from "../animate"
import Btn from '../Button/Button'


const Features = () => {
    const [element, controls] = useScroll()

  return (
    <div>
        <section className="features"
           ref={element}
         >
            <motion.div
              variants={genAnimation}
              animate={controls}
              transition={{
                  delay: 0.03,
                  type:"tween",
                  duration: 0.8
              }}
            >
                <h3 className='title'>
                    Market sentiments, portfolio, and run <br /> the infrastructure of your choice
                </h3>

                <div className='features_content'>
                    <div>
                        <h3>Invest Smart</h3>
                        <p>
                            Get full statistic information about the behaviour of <br /> buyers and sellers will help you to make the decision. 
                        </p>
                        <Btn content="Learn More" />
                    </div>

                    <div className='img_div'>
                        <img src={chart} alt="chart" />
                    </div>
                </div>
            </motion.div>
           
        </section>
    </div>
  )
}

export default Features