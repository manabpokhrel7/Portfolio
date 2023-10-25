import React, { useEffect, useRef } from 'react';
import './First.css'; // You can create a separate CSS file for styling
import styles from './Button89.module.css';
import './Manabtext.css';
import SlideInSection from '../SlideInSection';


function First() {
  const aboutRef = useRef(null);

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2")
    };

    const texts = [
      "Web Developer",
      "Freelancer",
      "ReactJS"
    ];

    const morphTime = 2;
    const cooldownTime = 1;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }, []);

  return (
    <div>
      <SlideInSection>
        <h1 style={{ color: "#00000" }}>My Name is</h1>
        <div className="waviy">
          <span style={{ '--i': 1 }}>M</span>
          <span style={{ '--i': 2 }}>a</span>
          <span style={{ '--i': 3 }}>n</span>
          <span style={{ '--i': 4 }}>a</span>
          <span style={{ '--i': 5 }}>b</span>&nbsp;&nbsp;
          <span style={{ '--i': 1 }}>P</span>
          <span style={{ '--i': 2 }}>o</span>
          <span style={{ '--i': 3 }}>k</span>
          <span style={{ '--i': 4 }}>h</span>
          <span style={{ '--i': 5 }}>r</span>
          <span style={{ '--i': 4 }}>e</span>
          <span style={{ '--i': 5 }}>l</span>
        </div>
        <div id="container" className="hide-on-mobile">
          <span id="text1"></span>
          <span id="text2"></span>
        </div>
        <button className={styles.button89} style={{ color: "#D70040" }} onClick={handleScroll}>
          SEE PORTFOLIO
        </button>
      </SlideInSection>
      <div ref={aboutRef}></div>
    </div>
  );
}

export default First;
