import React from 'react'
import './ContactMe.css'

export default function ContactMe() {

  const ContactInfo = {
    title: 'Contáctame',
    description: 'Si estás aquí y consideras que soy el indicado para ayudarte, claro que puedo hacerlo. Ponte en contacto conmigo.',
    phone: '(+57) 3107075514'
  }

  return (
    <div className="center-txt contact-me mb" >
      <div className="contact-padding" data-aos="zoom-in">
        <h2>{ContactInfo.title}</h2>
        <div className="line-dv line-white"></div>
        <div className="mb">
          <p>Si estás aquí y consideras que soy el indicado para ayudarte, claro que puedo hacerlo.<br></br> Ponte en contacto conmigo.</p>
          <h3><i class="fab fa-whatsapp"></i> (+57) 3107075514</h3>
        </div>
      </div>
    </div>
  )
}