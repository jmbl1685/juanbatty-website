import React from "react";
import { Element } from "react-scroll";
import "./AboutMe.css";

export default function AboutMe() {
  const AboutUsInfo = {
    title: "Acerca de mí",
    paragraph: [
      "Soy desarrollador de software e Ingeniero de Sistemas en formación, me gusta todo lo relacionado a nuevas tecnologías, me apasionan todos los procesos tanto del Front-End como del Back-End, me desempeño muy bien en la dos áreas.",
      "Me gusta llevar a cabo siempre las buenas prácticas de desarrollo para así poder brindar soluciones de alta cálidad para quien necesite mis servicios."
    ]
  };

  return (
    <Element name="about-me">
      <br />
      <div className="container about-me" data-aos="fade-up">
        <div>
          <div className="center-txt">
            <h2>{AboutUsInfo.title}</h2>
            <div className="line-dv" />
            <div className="mb">
              {AboutUsInfo.paragraph.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
