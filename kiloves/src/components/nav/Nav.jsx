import './nav.css'
import { useState, useEffect } from 'react'
import {
  FaBook,
  FaFacebookMessenger,
  FaGamepad,
  FaHome,
  FaRocket,
} from 'react-icons/fa'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveNav(`#${entry.target.id}`)
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    })

    const sections = document.querySelectorAll('section')
    const headers = document.querySelectorAll('header')
    sections.forEach((section) => {
      observer.observe(section)
    })
    headers.forEach((header) => {
      observer.observe(header)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <nav>
      <a href="#home" className={activeNav === '#home' ? 'active' : ''}>
        <FaHome />
      </a>
      <a href="#kilovesrol" className={activeNav === '#kilovesrol' ? 'active' : ''}>
        <FaRocket />
      </a>
      <a href="#szabalyok" className={activeNav === '#szabalyok' ? 'active' : ''}>
        <FaBook />
      </a>
      <a href="#minijatekok" className={activeNav === '#minijatekok' ? 'active' : ''}>
        <FaGamepad />
      </a>
      <a href="#kapcsolat" className={activeNav === '#kapcsolat' ? 'active' : ''}>
        <FaFacebookMessenger />
      </a>
    </nav>
  )
}

export default Nav
