import React from 'react'
import './Skills.css'

export default function Skills() {

  const AboutUsInfo = {
    title: "HABILIDADES",
    technologies: [
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/javascript.png",
        name: "Javascript",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/csharp.jpg",
        name: "C#",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/azure.png",
        name: "Microsoft Azure",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/nodejs.png",
        name: "Node.js",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/angular.png",
        name: "Angular",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/reactjs.png",
        name: "React.js",
        description: ""
      }, 
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/aspnet.gif",
        name: "ASP.NET Framework",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/sass.svg",
        name: "Sass ",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/gulp.png",
        name: "Gulp",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/mongodb.png",
        name: "MongoDB",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/firebase.png",
        name: "Firebase",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/sqlserver.png",
        name: "SQL Server",
        description: ""
      },
      {
        logo: "https://jmbl1685.github.io/rfm-tech/img/mysql.png",
        name: "MySQL",
        description: ""
      }
    ]
  }

  return (
    <div className="center-txt" data-aos="fade-up">
      <section>
        <div>
          <h2>{AboutUsInfo.title}</h2>
        </div>
      </section>
      <div className="container" >
        <div className="row">
          {
            AboutUsInfo.technologies.map((item, index) => {
              return (
                <div data-aos="flip-down" key={index} className="col-sm-4 col-md-3 col-lg-3 col-xl-3">
                  <img alt={item.name} className="logo-technology" src={item.logo} />
                  <p>{item.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}