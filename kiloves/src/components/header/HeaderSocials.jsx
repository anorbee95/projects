import { FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://instagram.com/kiloves" target="_blank" rel="noreferrer"><FaInstagram /></a>
      <a href="https://tiktok.com/kiloves" target="_blank" rel="noreferrer"><FaTiktok /></a>
      <a href="https://github.com/anorbee95" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials;
