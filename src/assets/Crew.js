import { useState } from 'react'
import './crew/crew.css'
import { motion } from 'framer-motion'
import crewDetails from '../data'

function Crew() {
    const [crewMember] = useState(crewDetails.crew);
    const [state, setState] = useState(0)
    const [open, closed] = useState(true)
    const { name, images, role, bio } = crewMember[state]

    const newStyle = {
        background: 'var(--prime)'
    }
    function handleThis(index) {
        setState(index)
        closed(false)
        setTimeout(()=>{closed(true)},500)
    }
    const crewVariant = {
        hidden: { opacity: 0, x: '100vw' },
        visible: {
            opacity: 1, x: 0,
            transition: { duration: 0.5 }
        },
        exit: { x: '-100vw', transition: { duration: 0.5 } }
    }
    return (
        <div className='crew-section'>
            <motion.div className='crew-details' initial="hidden" animate='visible' variants={crewVariant} exit="exit">
                <h1><span>02</span> Meet your Crew</h1>
                <div className='members'>
                    <motion.section animate={open?{opacity:1}:{opacity:0}} transition={{duration:0}}>
                        <h2>{role}</h2>
                        <h3>{name}</h3>
                        <p>{bio}</p>
                        <div className='crew-toggle'>
                            {crewMember.map((member, index) => {
                                return <button style={newStyle} onClick={() => handleThis(index)} key={index}></button>
                            })}
                        </div>

                    </motion.section>
                    <motion.div className='crew-photo'animate={open?{opacity:1}:{opacity:0}} transition={{duration:0}}>
                        <img src={images.png} alt={name} title={name} />
                    </motion.div>

                </div>
            </motion.div>
        </div>
    )
}

export default Crew