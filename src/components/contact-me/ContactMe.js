import React from "react";
import "./ContactMe.css";

export default function ContactMe() {
  const ContactInfo = {
    title: "Contáctame",
    description:
      "Puedes comunicarte conmigo a través de mis redes sociales o escribiendome al siguiente número",
    phone: "(+57) 3107075514"
  };

  return (
    <div className="center-txt contact-me mb">
      <div className="contact-padding" data-aos="zoom-in">
        <h2>{ContactInfo.title}</h2>
        <div className="line-dv line-white" />
        <div>
          <p>{ContactInfo.description}</p>
          <h3>
            <i className="fab fa-whatsapp" /> {ContactInfo.phone}
          </h3>
        </div>
      </div>
    </div>
  );
}
