import React from 'react'
import Card from '../Card/Card'
import Btc from '../../Assets/bitcoin (2).png'
import Eth from '../../Assets/eth.png'
import Ltc from '../../Assets/ltc.png'
import {motion} from "framer-motion"
import {useScroll} from "../Scroll"
import {genAnimation} from "../animate"

const Crypto = () => {
    const [element, controls] = useScroll()

  return (
    <div>
        <section className='crypto_section'
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
                    Trade securely and market the high <br /> growth cryptocurrencies.
                </h3>
                <div className='card_wrapper'>
                    <Card 
                        icon={Btc}
                        title="Bitcoin"
                        span="BTC"
                        body="Digital currency in which a record of transactions is maintained."
                    />
                    <Card 
                        icon={Eth}
                        title="Ethereum"
                        span="ETH"
                        body="Blockchain technology to create and run decentralized digital applications."
                    />
                    <Card 
                        icon={Ltc}
                        title="Litecoin"
                        span="LTC"
                        body="Cryptocurrency that enables instant payments to anyone in the world."
                    />
                </div>
            </motion.div>
        </section>
    </div>
  )
}

export default Crypto