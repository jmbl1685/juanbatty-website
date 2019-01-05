import React from "react";

import { ScrollAnimation, DisplayStyleValue } from "../../utils/utils";
import "./Home.css";
import arrow_down from "../../assets/img/arrow_down.svg";

export default function Home() {
  window.onscroll = () => {
    DisplayStyleValue(500, document.getElementById("fixed-accounts"));
  };

  const HomeInfo = {
    title: "Juan Batty",
    description: "Fullstack .NET and Javascript Developer",
    accounts: [
      {
        iconClass: "fab fa-github github",
        url: "https://github.com/jmbl1685"
      },
      {
        iconClass: "fab fa-twitter twitter",
        url: "https://twitter.com/jmbl1685"
      },
      {
        iconClass: "fab fa-linkedin linkedin",
        url: "https://www.linkedin.com/in/juan-manuel-batty-linero-ba955a138/"
      },
      {
        iconClass: "fab fa-youtube youtube",
        url: "https://www.youtube.com/channel/UCO2Ugy7W2xHZ6sDGBiRizrg"
      },
      {
        iconClass: "fab fa-instagram instagram",
        url: "https://www.instagram.com/juanbatty/"
      },
      {
        iconClass: "far fa-envelope envelope",
        url: "mailto:jmbl1685@hotmail.com"
      }
    ]
  };

  return (
    <div>
      <div id="fixed-accounts">
        <div>
          {HomeInfo.accounts.map((item, index) => {
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
            {HomeInfo.title}
          </h1>
          <h3
            className="subtitle job"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay="400"
          >
            {HomeInfo.description}
          </h3>
          <div data-aos="flip-up" data-aos-easing="ease" data-aos-delay="800">
            {HomeInfo.accounts.map((item, index) => {
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
