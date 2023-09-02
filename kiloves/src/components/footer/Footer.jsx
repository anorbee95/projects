import React from 'react'
import './footer.css'
import { FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="# " className='footer__logo'>🚀 KILÖVÉS 🚀</a>

      <ul className='permalinks'>
        <li><a href="/">Kezdőoldal</a></li>
        <li><a href="/#kilovesrol">A kilövésről</a></li>
        <li><a href="/#szabalyok">Szabályok</a></li>
        <li><a href="/#minijatekok">Minijátékok</a></li>
        <li><a href="/#ertekelesek">Értékelések</a></li>
        <li><a href="/#kapcsolat">Kapcsolat</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/kiloves" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://tiktok.com/kiloves" target="_blank" rel="noreferrer"><FaTiktok /></a>
        <a href="https://github.com/anorbee95" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer