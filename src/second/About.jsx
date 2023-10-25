
import React, { useRef } from 'react';
import './About.css'; // Import the CSS file
import imageSrc from '../Images/about.jpg';
function About() {
  const aboutRef = useRef(null);
  return (
    <div ref={aboutRef}>
    <div className="aboutcontainer">
      <h1 style={{ color: "#D70040" }}>About</h1>
      <p1>About Me</p1>
      <div className='content'>
      <div className='left'>
      <img src={imageSrc} alt="Rounded Corners" className="rounded-image" />
      </div>

      <div className='right'>
        <p2 className="info">
        
My name is Manab Pokhrel</p2><br></br>
<p1 className="info2">

As a recent IT graduate who specialized in frontend web development and honed my skills in Photoshop, I'm passionate about the digital world and the power of creativity.

In the realm of technology, I'm known for my proficiency in crafting visually stunning and user-friendly websites, where I strike a harmonious balance between design and functionality. Web development isn't just a profession for me; it's a canvas for my creativity.

I've trained in boxing, where discipline, agility, and strength are the key to success. On the football field, I find joy in both playing and being an ardent fan of the beautiful game.

But my interests don't stop there. I'm also a musical soul, wielding a guitar with finesse. Music allows me to express my creativity in yet another form, proving that my talents extend beyond the tech world.

        </p1>
      </div>
      <div className="clearfix"></div>
      </div>
    </div>
    </div>
  );
}

export default About;
