import react from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () =>{
    return(
        <div className='mt-5 p-5'>
            <Hero/>
            <LatestCollection/>
            <OurPolicy/>
            <NewsLetterBox/>
        </div>
    )
}

export default Home 