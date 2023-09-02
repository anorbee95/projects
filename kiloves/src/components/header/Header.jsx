import './header.css'
import CTA from './CTA'
import KILOVES from '../../assets/kiloves.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Üdvözöllek a </h5>
        <h1>🚀 KILÖVÉS 🚀</h1>
        <h5 className="text-light">vagyis a legjobb ivós társas oldalán!</h5>
        <CTA />
        <HeaderSocial />

        <div className="header-img">
          <img src={KILOVES} alt="kiloves" />
        </div>

        <a href="#contact" className='scroll__down'>Ugorj a végére</a>
      </div>
    </header>
  )
}

export default Header;
