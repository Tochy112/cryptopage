import React from 'react'
import "./Page.css"
import Btn from '../components/Button/Button'
import Illustration1 from "../Assets/Illustration1.png"
import arrow from "../Assets/Arrow Right.png"
import {motion} from "framer-motion"
import {landingAnimations, landingAnimationsImg} from "../components/animate"
import WhyCrappo from '../components/why_crappo/Why_crappo'
import Calculate from '../components/Calculate/Calculate'
import Crypto from '../components/Crypto/Crypto'
import Features from '../components/Features/Features'
import Statistics from '../components/Statistics/Statistics'
import Profit from '../components/Profit/Profit'
import Mining from '../components/Mining/Mining'



const Page = () => {

  return (
    <div className='page_wrapper'>
        
        {/* section 1 */}
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
                    <h1>Fastest & secure <br /> plartform to invest <br /> in crypto</h1>
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

        {/*section 2 */}

        <WhyCrappo />

        {/* section 3 */}

        <Calculate />

        {/* section 4 */}
        
        <Crypto />

        {/* SECTION 5 */}
        <Features />

        {/* SECTION 6 */}
        <Statistics />

        {/* SECTION 7 */}
        <Profit />

        {/* SECTION 8 */}
        <Mining />

    </div>
  )
}

export default Page