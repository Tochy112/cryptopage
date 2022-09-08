import React from 'react'
import WhyCrappo from '../components/why_crappo/Why_crappo'
import Calculate from '../components/Calculate/Calculate'
import Crypto from '../components/Crypto/Crypto'
import Features from '../components/Features/Features'
import Statistics from '../components/Statistics/Statistics'
import Profit from '../components/Profit/Profit'
import Mining from '../components/Mining/Mining'
import Landing from '../components/Landing_page/Landing'


const Page = () => {

  return (
    <div className='page_wrapper'>
        
        {/* section 1 */}

        <Landing />

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