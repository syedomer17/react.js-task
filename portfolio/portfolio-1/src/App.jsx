import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AiFillSkin } from 'react-icons/ai';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import TiltCard from './components/TiltCard';
import BackgroundParticles from './components/BackgroundParticles';
import DarkModeToggle from './components/DarkModeToggle';

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <Portfolio />
    <Experience />
    <Contact />
    <Footer />
    <CustomCursor />
    <TiltCard />
    <BackgroundParticles />
    <DarkModeToggle />

    </>
  )
}

export default App