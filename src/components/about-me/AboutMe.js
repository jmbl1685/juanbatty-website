import React from 'react';
import { Element } from 'react-scroll';
import './AboutMe.css';

export default function AboutMe(props) {
  const { about_me } = props.values;
  return (
    <Element name="about-me">
      <div className="container about-me" data-aos="fade-up">
        <div>
          <div className="center-txt">
            <img className="avatar" src={require('../../assets/img/avatar.jpg')} alt="avatar" />
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
