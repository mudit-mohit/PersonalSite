import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Mudit Mohit</h2>
        <p><a href="mailto:muditmohitkumarsingh@gmail.com">muditmohitkumarsingh@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Mudit, a GenAI Engineer specializing in building production-ready AI systems.
        I develop intelligent voice agents and human-in-the-loop architectures using LLMs,
        RAG, and real-time audio processing. Currently seeking opportunities to build impactful
        AI solutions.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;Mudit Mohit</p>
    </section>
  </section>
);

export default SideBar;
