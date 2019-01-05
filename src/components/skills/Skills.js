import React from "react";
import "./Skills.css";

export default function Skills() {
  const AboutUsInfo = {
    title: "Habilidades",
    skill_items: [
      {
        logo: "logo fas fa-paint-brush",
        title: "Desarrollo Front-End",
        description:
          "HTML5, CSS3, JavaScript, Angular.js, Angular, React.js, Responsive Design, SASS, Gulp, WebPack, SEO etc."
      },
      {
        logo: "logo fas fa-hdd",
        title: "Desarrollo Back-End",
        description: "C#, ASP.NET, ASP.NET Core, Node.js, etc."
      },
      {
        logo: "logo fas fa-database",
        title: "Base de datos",
        description: "SQL Server, MySQL, MongoDB, Firebase."
      },
      {
        logo: "logo fas fa-tasks",
        title: "DevOps",
        description:
          "Microsoft Azure, AWS, Travis CI, Azure Pipelines, Test Unitarios, etc."
      }
    ]
  };

  return (
    <div className="center-txt" data-aos="fade-up">
      <section>
        <div>
          <h2>{AboutUsInfo.title}</h2>
          <div className="line-dv" />
        </div>
      </section>
      <div className="container mb">
        <div className="row">
          {AboutUsInfo.skill_items.map((item, index) => {
            return (
              <div key={index} className="center-txt col-lg-3 col-md-6">
                <div className="border-icon-container">
                  <div className="icon-container">
                    <i className={item.logo} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
