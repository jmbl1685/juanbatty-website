import React from "react";
import { skills } from "../../data/data.json";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="center-txt" data-aos="fade-up">
      <section>
        <div>
          <h2>{skills.title}</h2>
          <div className="line-dv" />
        </div>
      </section>
      <div className="container mb">
        <div className="row">
          {skills.skill_items.map((item, index) => {
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
