import React from 'react';
import Navigation from './components/Navigation';
import NewsTicker from './components/NewsTicker';
import Hero from './components/Hero';
import About from './components/About';
import Approach from './components/Approach';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Research from './components/Research';
import NewsUpdate from './components/NewsUpdate';
import QuarterlyInsights from './components/QuarterlyInsights';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <NewsTicker />
        <section id="hero">
          <Hero />
        </section>
        <About />
        <section id="approach">
          <Approach />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="research">
          <Research />
        </section>
        <section id="news">
          <NewsUpdate />
        </section>
        <section id="insights">
          <QuarterlyInsights />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
