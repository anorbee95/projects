import './minigames.css'
import IMG1 from '../../assets/karaokee.jpg'
import IMG2 from '../../assets/trivia.jpg'
import IMG3 from '../../assets/guesswho.jpg'
import IMG4 from '../../assets/activity.jpg'
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'KARAOKEE - Egy kis nehezítéssel - szigorúan monoton hangon',
    link: '/karaoke',
  },
  {
    id: 2,
    image: IMG2,
    title: '200 IQ - Kvízkérdések, akármiről, amit csak el tudsz képzelni',
    link: '/200iq',
  },
  {
    id: 3,
    image: IMG3,
    title: 'TALÁLD KI - Mennyi infóra lesz szükséged, hogy kitaláld?',
    link: '/talald-ki',
  },
  {
    id: 4,
    image: IMG4,
    title: 'SZÍNÉSZ - Egy kis activity filmekkel, sorozatokkal, színdarabokkal',
    link: '/szinesz',
  },
]

const Minigames = () => {
  return (
    <section id='minijatekok'>
      <h5>És a legjobb rész...</h5>
      <h2>A MINIJÁTÉKOK</h2>

      <div className="container minigames__container">
        {
          data.map(({ id, image, title, link }) => {
            return (
              <article key={id} className='minigames__item'>
                <div className="minigames__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="minigames__item-cta">
                  <Link to={link} className='btn'>Próbáld ki!</Link>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Minigames