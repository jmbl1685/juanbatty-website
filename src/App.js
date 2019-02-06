import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";

import json_data from "./data/data.json";
import { url_data } from "./utils/utils";

import Home from "./components/home/Home";
import AboutMe from "./components/about-me/AboutMe";
import ContactUs from "./components/contact-me/ContactMe";
import Skills from "./components/skills/Skills";

export default function App() {
  const [data, setData] = useState(json_data);

  async function CallData() {
    try {
      const result = await axios(url_data);
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
  }, json_data);

  return (
    <div>
      <Home values={data} />
      <AboutMe values={data} />
      <Skills values={data} />
      <ContactUs values={data} />
    </div>
  );
}
