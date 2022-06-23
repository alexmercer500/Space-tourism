import React from 'react'
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {



    return (
        <div className='home-section'>
            <motion.div className='home-intro' initial={{ y: '-100vh' }} animate={{ y: 0 }} exit={{x:'-100vw'}} transition={{duration:0.5}}>
                <h1> So, you want to travel to</h1>
                <h1> Space </h1>
                <section> Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </section>
            </motion.div>
            <motion.div className='explore' initial={{ y: '-100vh' }} animate={{ y: 0 }} exit={{x:'-100vw'}} transition={{duration:0.5}}>
                <Link to='/Destination'><h1>Explore</h1></Link>
            </motion.div>
        </div>
    )
}

export default Home