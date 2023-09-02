import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/kd.PNG'
import AVTR2 from '../../assets/ha.PNG'
import AVTR3 from '../../assets/fa.PNG'
import AVTR4 from '../../assets/an.PNG'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Kovács Démia',
    review: 'Fantasztikus élmény volt a Kilövés! A kreatív feladatok és vicces kihívások remekül szórakoztattak minket. A könnyen követhető játékszabályok gyorsan elindították a játékot, és rengeteget nevettünk. Néhány kihívás lehetne egyszerűbb, de összességében nagyon szuper volt.'
  },
  {
    avatar: AVTR2,
    name: 'Hátszegi Ádám',
    review: 'Érdekes koncepcióú társasjáték, amely jó alapot adott a szórakozáshoz. A változatos feladatok bár néha erőltetettek voltak, mégis szórakoztatóak maradtak. A játékmenet lehetne hosszabb, a könnyen érthető játékszabályokkal gyorsan elindultunk és gyorsan le is ment a játék. További feladatokkal még jobb lehetne!'
  },
  {
    avatar: AVTR3,
    name: 'Fodor Ákos',
    review: 'Kiváló ivós társasjáték élmény! A szellemes feladatok és kihívások igazán jókedvre derítettek minket. A játék könnyen érthető szabályai garantálták a jó időtöltést. Néhány további variáció a feladatokban tovább fokozhatná az élményt illetve további kártyák jelezhetnék az aktuális szitukat.'
  },
  {
    avatar: AVTR4,
    name: 'Augusztin Norbert',
    review: 'Élveztük ezt a társasjátékot! Remek alapötlet, bár néhány részlet még finomhangolást igényel. A játékszabályok egyszerűek és könnyen érthetőek, bár a játék vége 8 fő esetén kissé lelassult. Néhány újítás és variáció még színesebbé tehetné ezt a szórakoztató játékot. Biztos vagyok benne, hogy bővülni fog ;)'
  },
]

const Testimonials = () => {
  return (
    <section id='ertekelesek'>
      <h5>Ők már kilőttek...</h5>
      <h2>ÉRTÉKELÉSEK</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]} spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt='avatar' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials