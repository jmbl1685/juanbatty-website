import React from 'react';
import { ScrollAnimation, DisplayStyleValue } from '../../utils/utils';
import './Home.css';
import arrow_down from '../../assets/img/arrow_down.svg';

export default function Home(props) {
  const { home } = props.values;

  window.onscroll = () => {
    DisplayStyleValue(500, document.getElementById('fixed-accounts'));
  };

  return (
    <div>
      <div id="fixed-accounts">
        <div>
          {home.accounts.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <i className={item.iconClass} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="header">
        <div className="m-top">
          <h1 className="title" data-aos="zoom-in">
            {home.title}
          </h1>
          <h3
            className="subtitle job"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay="400"
          >
            {home.description}
          </h3>
          <div data-aos="flip-up" data-aos-easing="ease" data-aos-delay="800">
            {home.accounts.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <i className={item.iconClass} />
                </a>
              );
            })}
          </div>
          <br />
          <img
            onClick={event => ScrollAnimation(event)}
            height="22"
            width="22"
            src={arrow_down}
            alt="arrow_down"
            id="about-me"
          />
        </div>
      </div>
    </div>
  );
}
