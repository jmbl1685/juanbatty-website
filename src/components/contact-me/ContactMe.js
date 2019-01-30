import React from "react";
import { contact } from "../../data/data.json";
import "./ContactMe.css";

export default function ContactMe() {
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
