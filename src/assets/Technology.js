import { useState, useRef } from "react";
import { motion } from 'framer-motion'
import './technology/technology.css'
import techDetails from '../data'

function Technology() {
    const btnRef = useRef();
    const [Technology] = useState(techDetails.technology);
    const [state, setState] = useState(0)
    const [value, setValue] = useState('')
    const [open, closed] = useState(true)
    const { name, images, description } = Technology[state]

    const techVariant = {
        hidden: {
            opacity: 0, x: '-100vw'
        },
        visible: {
            opacity: 1, x: 0,
            transition:{ duration:0.5}
        },
        exit:{x:'-100vw', transition:{ duration:0.5}}
    }
    function btnToggle(tech, index) {
        setState(index);
        setValue(index);
        closed(false)
        setTimeout(()=>{closed(true)},500)
    }

    const newStyle = {
        background: '#fff',
        color: '#000'
    }

    return (
        <div className='tech-section'>
            <motion.div className='tech-details' initial="hidden" animate="visible" exit="exit" variants={techVariant} >
                <h1><span>03</span> Space Launch 101</h1>
                <img className="mobile-view" src={images.landscape} alt={name} title={name} />
                <div className='technologies'>
                    <div className='tech-toggle'>
                        {Technology.map((tech, index) => {
                            return <button key={index}
                                value={value}

                                onClick={() => btnToggle(tech, index)} >{index + 1}
                            </button>
                        })}
                    </div>
                    <motion.section  animate={open?{opacity:1}:{opacity:0}} transition={{duration:0}}>
                        <h2>the technology</h2>
                        <h3>{name}</h3>
                        <p>{description}</p>

                    </motion.section>
                    <motion.div className='tech-photo'  animate={open?{opacity:1}:{opacity:0}} transition={{duration:0}}>
                        <img className="desktop-view" src={images.portrait} alt={name} title={name} />
                    </motion.div>

                </div>
            </motion.div>
        </div>
    )
}
export default Technology