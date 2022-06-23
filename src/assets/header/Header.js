import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../shared/logo.svg'
import navOpen from '../shared/icon-hamburger.svg'
import navClose from '../shared/icon-close.svg'


function Header() {

  const navRef = useRef();
  const menuRef = useRef();
  let navMenu = navRef.current;
  let menuBar = menuRef.current;
  function navToggle() {
    
    navMenu.classList.toggle('active')
    menuBar.classList.toggle('active')
  }
  const navBar = document.querySelectorAll('li')

  return (
    <motion.div className='head-section' 
    initial={{opacity:0}}
    animate={{opacity:1}}
    >
      <nav>
        <img className='logo' src={logo} alt='logo' />
        
        <ul ref={menuRef}>
          <li key={'1st'}>
            <Link to='/'><span>00</span> Home</Link></li>
          <li key={'2nd'}>
            <Link to='/Destination'><span>01</span> Destination</Link></li>
          <li key={'3rd'}>
            <Link to='/Crew'><span>02</span> Crew</Link></li>
          <li key={'4th'}>
            <Link to='/Technology'><span>03</span> Technology</Link></li>
        </ul>
        <div className='nav-toggle ' onClick={navToggle} ref={navRef}>
          <img className='nav-open' src={navOpen} alt='navigation button' />
          <img className='nav-close' src={navClose} alt='navigation button' />
        </div>
      </nav>
    </motion.div>
  )
}

export default Header