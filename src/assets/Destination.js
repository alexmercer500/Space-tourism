import { useState } from 'react'
import { motion } from 'framer-motion'
import './destination/destination.css'
import customData from '../data'

export default function Destination() {
  const [planet] = useState(customData.destinations);
  const [state, setState] = useState(0);
  const [open, closed] = useState(true)
  function handleCLick(index){
    setState(index)
    closed(false)
    setTimeout(()=>{closed(true)},500)
  }


  const { name, images, description, distance, travel } = planet[state]
  const destVariant = {
    hidden: { y: '100vh', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: {duration: 0.5}},
    exit: { x: '-100vw', transition: {duration: 0.5}}
  }
  return (
    <div className='dest-section' >
      <motion.div className='destination' variants={destVariant} initial='hidden' animate='visible' exit='exit'>
        <h1 className='dest-heading'><span>01</span> Pick your destination</h1>
        <div className='planets' style={{ marginTop: '5em' }}>
          <motion.img src={images.png} alt={name} animate={open?{opacity:1, scale:1}:{opacity:0, scale:0}} />
          <motion.div className='planet-info' animate={!open?{opacity:0}:{opacity:1}} transition={{duration:0}}>
            <div className='destination-btn'>
              {
                planet.map((item, index) => {
                  return <button className='btn'
                    onClick={()=> handleCLick(index) } key={index}>
                    {planet[index].name}</button>
                })
              }
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className='distance-travel'>
              <h3 className='distance'><span>avg. distance</span>{distance}</h3>
              <h3 className='travel'><span>est. travel time</span>{travel}</h3>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

