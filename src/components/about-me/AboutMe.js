import React from "react";
import { Element } from "react-scroll";
import { about_me } from "../../data/data.json";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <Element name="about-me">
      <br />
      <div className="container about-me" data-aos="fade-up">
        <div>
          <div className="center-txt">
            <h2>{about_me.title}</h2>
            <div className="line-dv" />
            <div className="mb">
              {about_me.paragraph.map((item, index) => {
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
