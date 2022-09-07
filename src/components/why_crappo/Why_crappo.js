import React from 'react'
import {motion} from "framer-motion"
import {useScroll} from "../Scroll"
import {genAnimation} from "../animate"
import Illustration2 from "../../Assets/Illustration2.png"
import Earth from "../../Assets/Earth.png"
import Person from "../../Assets/Person.png"
import Bar_Chart from "../../Assets/Bar_Chart.png"
import Btn from '../Button/Button'



const Why_crappo = () => {
    const [element, controls] = useScroll()

  return (
    <div>
         <section className='why_crappo'
            ref={element}
        >
            <motion.div className='why_crappo_wrapper'
            variants={genAnimation}
                animate={controls}
                transition={{
                    delay: 0.03,
                    type:"tween",
                    duration: 0.8
                }}
            >
                <div className='numbers'
                >
                    <div className='numbers_content'>
                        <div className='img_div'>
                            <img src={Bar_Chart} alt="bar_chart" />
                        </div>
                       <div>
                            <h1>$30B</h1>
                            <p>Digital Exchanged</p>
                       </div>
                    </div>
                    <div className='numbers_content'>
                        <div className='img_div'>
                            <img src={Person} alt="person_icon" />
                        </div>
                        <div>
                            <h1>10M+</h1>
                            <p>Trusted Wallets Investor</p>
                        </div>
                    </div>
                    <div className='numbers_content'>
                        <div className='img_div'>
                            <img src={Earth} alt="erath_icon" />
                        </div>
                       <div>
                            <h1>195</h1>
                            <p>Countries Supported</p>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='img_div'>
                        <img src={Illustration2} alt="Illustration2" />
                    </div>

                    <div>
                        <h1>Why you should choose <br /> CRAPPO</h1>
                        <p>
                            Experience the next generation cryptocurrency <br /> 
                            plartform. No finiancial borders, extra fees, and fake <br />
                            reviews.
                        </p>
                        <Btn content="Learn More" />
                    </div>
                </div>

                <div className='check'>
                    <h2>Check how much you can earn</h2>
                    <p>
                        Let's check your hash rate to see how much you will earn today, <br />
                        Exercitation venia consequat sunt nostrud amet.
                    </p>
                </div>
            </motion.div>
        </section>
    </div>
  )
}

export default Why_crappo