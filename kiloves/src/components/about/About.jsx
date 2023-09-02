import './about.css'
import KILOVES2 from '../../assets/kiloves-board.png'
import { FaLaughSquint, FaUserFriends, FaRocket } from 'react-icons/fa'

const About = () => {
  return (
    <section id='kilovesrol'>
      <h5>Beszéljünk egy kicsit</h5>
      <h2>A KILÖVÉSRŐL</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={KILOVES2} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaLaughSquint className='about__icon' />
              <h5>Szórakozás</h5>
              <small>A nevetés garantált</small>
            </article>

            <article className='about__card'>
              <FaUserFriends className='about__icon' />
              <h5>Társaság</h5>
              <small>Akár 8-an is játszható</small>
            </article>

            <article className='about__card'>
              <FaRocket className='about__icon' />
              <h5>Kilövés</h5>
              <small>Innis se felejtsetek el</small>
            </article>
          </div>

          <p>
            Ülj össze a barátaiddal egy király, nevetéssel teli éjszakára, miközben a Kilövéssel játszotok
          </p>
          <ul>
            <li>
              <FaRocket className='li-icon' /> A játéktáblán 50 mező van, ezek közül 4 mezőben QR-kód található, amely minijátékokhoz vezet ezen a weboldalon. A minijátékok folyamatosan frissülnek a korlátlan újrajátszhatóság érdekében.
            </li>
            <li>
              <FaRocket className='li-icon' /> Tartalmazza a játéktáblát, a 6 oldalú kockát és a 8 játékos bábuját.
            </li>
            <li>
              <FaRocket className='li-icon' /> Csak felnőtteknek: A Kilövés 18 éven felülieknek készült, a piálás opcionális, és nem kötelező a játékhoz. Felelősségteljesen igyatok!
            </li>
          </ul>

          <a href="#contact" className='btn btn-primary'>Szerezd be a sajátod!</a>
        </div>
      </div>
    </section>
  )
}

export default About