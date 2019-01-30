import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";

import json_data from "./data/data.json";

import Home from "./components/home/Home";
import AboutMe from "./components/about-me/AboutMe";
import ContactUs from "./components/contact-me/ContactMe";
import Skills from "./components/skills/Skills";
// import Repositories from './components/repositories/Repositories';

export default function App() {
  const [data, setData] = useState(json_data);

  async function CallData() {
    try {
      const url =
        "https://raw.githubusercontent.com/jmbl1685/juanbatty-website/master/src/data/data.json";
      const result = await axios(url);
      setData(result.data);
    } catch (err) {
      setData(json_data);
    }
  }

  useEffect(() => {
    CallData();
    AOS.init({
      easing: "ease-out-back",
      duration: 1000
    });
  });

  return (
    <div>
      <Home data={data} />
      <AboutMe data={data} />
      <Skills data={data} />
      <ContactUs data={data} />
    </div>
  );
}
