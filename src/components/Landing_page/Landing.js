import React from 'react'
import Btn from '../Button/Button'
import Illustration1 from "../../Assets/Illustration1.png"
import arrow from "../../Assets/Arrow Right.png"
import {motion} from "framer-motion"
import {landingAnimations, landingAnimationsImg} from "../animate"

const Landing = () => {
  return (
    <div>
              <section className='landing_page'
        >
            <div className='landing_div'>
                <motion.div className='write_up'
                  variants={landingAnimations}
                  transition= {{delay: 0.3, duration:1, type:"tween"}}
                >
                    <div className='discount'>
                        <div>75% SAVE</div>
                        <p>For the Black Friday weekend</p>
                    </div>
                    <h1>Fastest & secure <br /> platform to invest <br /> in crypto</h1>
                    <p>
                        Buy and sell cryptocurrencies, trusted by 10M wallets <br /> 
                        with over $30 billion in transactions.
                    </p>
                    <Btn 
                        content="Try for FREE" 
                        icon ={ <img src={arrow} alt="arrow" />}
                    />
                </motion.div>

                <motion.div className='img_div'
                    variants={landingAnimationsImg}
                    transition= {{delay: 0.3, duration:1, type:"tween"}}
                >
                    
                    <img src={Illustration1} alt="Illustration1" />
                </motion.div>
            </div>
        </section>
    </div>
  )
}

export default Landing