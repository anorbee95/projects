import React from 'react'
import './rules.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Rules = () => {
  return (
    <section id='szabalyok'>
      <h5>Na de mik is pontosan</h5>
      <h2>A JÁTÉKSZABÁLYOK</h2>

      <div className="container rules__container">
        <div className="rules__frontend">
          <h3>Amit megtalálsz a dobozban:</h3>
          <div className="rules__content">
            <article className='rules__details'>
              <BsPatchCheckFill className='rules__details-icon' />
              <div>
                <h4>A játéktábla</h4>
                <small className='text-light'>Anélkül nehéz lenne...</small>
              </div>
            </article>
            <article className='rules__details'>
              <BsPatchCheckFill className='rules__details-icon' />
              <div>
                <h4>A bábuk</h4>
                <small className='text-light'>Hogy legyen mivel lépni...</small>
              </div>
            </article>
            <article className='rules__details'>
              <BsPatchCheckFill className='rules__details-icon' />
              <div>
                <h4>A dobókocka</h4>
                <small className='text-light'>Hogy tudd mennyit lépj...</small>
              </div>
            </article>
            <article className='rules__details'>
              <BsPatchCheckFill className='rules__details-icon' />
              <div>
                <h4>A szabályok</h4>
                <small className='text-light'>Nem lehet elrontani...</small>
              </div>
            </article>

          </div>
        </div>

        <div className="rules__backend">
          <h3>Amit nektek kell hoznotok:</h3>
          <div className="rules__content">
            <article className='rules__details'>
              <BsPatchCheckFill className='rules__details-icon' />
              <div>
                <h4>Poharak és ital</h4>
                <small className='text-light'>Akinek, ami jól esik...</small>
              </div>
            </article>
            <article className='rules__details'>
              <BsPatchCheckFill className='rules__details-icon' />
              <div>
                <h4>Dobómozdulat</h4>
                <small className='text-light'>A legfiatalabb kezd...</small>
              </div>
            </article>
            <article className='rules__details'>
              <BsPatchCheckFill className='rules__details-icon' />
              <div>
                <h4>Olvasás</h4>
                <small className='text-light'>És persze teljesítés...</small>
              </div>
            </article>
            <article className='rules__details'>
              <BsPatchCheckFill className='rules__details-icon' />
              <div>
                <h4>Jókedv</h4>
                <small className='text-light'>A feladatok garantálják...</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Rules;
