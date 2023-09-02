import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fjfb17', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')

    e.target.reset()
  };

  return (
    <section id='kapcsolat'>
      <h5>Kérdésed van?</h5>
      <h2>ITT TUDSZ ELÉRNI</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>augusztinnorbert@gmail.com</h5>
            <a href="mailto:augusztinnorbert@gmail.com" target="_blank" rel="noreferrer">Írj emailt!</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>augusztinnorbi</h5>
            <a href="https://m.me/augusztinnorbi" target="_blank" rel="noreferrer">Írj messengeren!</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+36309517623</h5>
            <a href="https://api.whatsapp.com/send?phone=+36309517623" target="_blank" rel="noreferrer">Írj whatsappon!</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Ide írd a teljes neved..' required />
          <input type="email" name='email' placeholder='Ide írd az email címed..' required />
          <textarea name="message" rows="7" placeholder='Ide pedig az üzenetet..' required ></textarea>
          <button type='submit' className='btn btn-primary'>Küldés</button>
        </form>
      </div>
    </section>
  )
}

export default Contact