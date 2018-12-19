import React from 'react';

/* Components */
import Home from './components/home/Home';
import AboutMe from './components/about-me/AboutMe';
import ContactUs from './components/contact-me/ContactMe';
import Skills from './components/skills/Skills';
import Repositories from './components/repositories/Repositories';

export default function App() {
  return (
    <div>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <ContactUs></ContactUs>
      <Repositories></Repositories>
    </div>
  );
}

