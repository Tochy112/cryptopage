import React from 'react'
import "./Page.css"
import Btn from '../components/Button/Button'
import Illustration1 from "../Assets/Illustration1.png"
import Illustration2 from "../Assets/Illustration2.png"
import Earth from "../Assets/Earth.png"
import Person from "../Assets/Person.png"
import Bar_Chart from "../Assets/Bar_Chart.png"
import Card from '../components/Card/Card'
import Btc from '../Assets/bitcoin (2).png'
import Eth from '../Assets/eth.png'
import Ltc from '../Assets/ltc.png'
import chart from "../Assets/Chart.png"
import stat from "../Assets/Statistic.png"
import profit from "../Assets/profit.png"
import arrow from "../Assets/Arrow Right.png"


const Page = () => {
  return (
    <div className='page_wrapper'>
        {/* section 1 */}
        <section className='landing_page'>
            <div className='landing_div'>
                <div className='write_up'>
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
                </div>

                <div className='img_div'>
                    <img src={Illustration1} alt="Illustration1" />
                </div>
            </div>
        </section>

        {/*section 2 */}
        <section className='why_crappo'>
            <div className='why_crappo_wrapper'>
                <div className='numbers'>
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
            </div>
        </section>

        {/* section 3 */}
        <section className='calculate'>
            <div className='calculate_box'>
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
            </div>
        </section>

        {/* section 4 */}
        <section className='crypto_section'>
            <div>
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
            </div>
        </section>

        {/* SECTION 5 */}
        <section className="features">
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
        </section>

        {/* SECTION 6 */}
        <section className="statistics">

            <div className='statistics_content'>
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
            </div>
        </section>

        {/* SECTION 7 */}
        <section className="profit">

            <div className='profit_content'>
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
            </div>
        </section>

        {/* SECTION 8 */}
        <section className='mining'>
            <div className='mining_box'>
                <div className='write_up'>
                    <h2>Start mining now</h2>
                    <p>Join now with CRAPPO to get the latesr news <br />and start mining now</p>
                </div>

                <input type="text" placeholder='Enter your email' />
                <button>Subscribe</button>
            </div>
        </section>

    </div>
  )
}

export default Page