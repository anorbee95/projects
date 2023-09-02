import './nav.css'
import { useState } from 'react'
import { FaBook, FaFacebookMessenger, FaGamepad, FaHome, FaRocket } from 'react-icons/fa'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="# " onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#kilovesrol" onClick={() => setActiveNav('#kilovesrol')} className={activeNav === '#kilovesrol' ? 'active' : ''}><FaRocket /></a>
      <a href="#szabalyok" onClick={() => setActiveNav('#szabalyok')} className={activeNav === '#szabalyok' ? 'active' : ''}><FaBook /></a>
      <a href="#minijatekok" onClick={() => setActiveNav('#minijatekok')} className={activeNav === '#minijatekok' ? 'active' : ''}><FaGamepad /></a>
      <a href="#kapcsolat" onClick={() => setActiveNav('#kapcsolat')} className={activeNav === '#kapcsolat' ? 'active' : ''}><FaFacebookMessenger /></a>
    </nav>
  )
}

export default Nav