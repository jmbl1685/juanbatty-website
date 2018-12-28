import React, { useEffect } from 'react';
import AOS from 'aos';


import Home from './components/home/Home';
import AboutMe from './components/about-me/AboutMe';
import ContactUs from './components/contact-me/ContactMe';
import Skills from './components/skills/Skills';
// import Repositories from './components/repositories/Repositories';

export default function App() {

  useEffect(() => {   
			AOS.init({
				easing: 'ease-out-back',
				duration: 1000
			})
  })

  return (
    <div>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <ContactUs></ContactUs>
    </div>
  );
}

