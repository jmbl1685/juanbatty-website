import React from 'react'
import './AboutMe.css'

export default function AboutMe() {

  const AboutUsInfo = {
    title: "Acerca de mí",
    message: "and more recently with desktop publishing software like Aldus PageMaker including.",
    paragraph: [
      "Soy desarrollador de software e Ingeniero de Sistemas en formación, me gusta todo lo relacionado a nuevas tecnologias, me apasionan todos los procesos tanto de Front-End como el Back-End, me desempeño muy bien en la dos áreas.",
      "Me gusta llevar a cabo siempre las buenas prácticas de desarrollo para así poder brindar soluciones de alta cálidad para quien necesite mis servicios."
    ]
  }

  return (
    <div className="container about-me" data-aos="fade-up">
      <section>
        <div className="center-txt">
          <h2>{AboutUsInfo.title}</h2>
          <div className="line-dv"></div>
          <div className="mb">
            {
              AboutUsInfo.paragraph.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}