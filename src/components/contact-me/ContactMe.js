import React from 'react';
import './ContactMe.css';

export default function ContactMe(props) {
  const { contact } = props.values;

  return (
    <div className="center-txt contact-me mb">
      <div className="contact-padding" data-aos="zoom-in">
        <h2>{contact.title}</h2>
        <div className="line-dv line-white" />
        <div>
          <p>{contact.description}</p>
          <h3>
            <i className="fab fa-whatsapp" /> {contact.phone}
          </h3>
        </div>
      </div>
    </div>
  );
}
