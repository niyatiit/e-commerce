import react from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'

const Home = () =>{
    return(
        <div className='mt-5 p-5'>
            <Hero/>
            <LatestCollection/>
        </div>
    )
}

export default Home 