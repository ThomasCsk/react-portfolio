import React from 'react';
import mugshot from '../../assets/Mugshot/mugshot.jpg'

const About = () => {
  return (
    <section>
      <h1>About Me, Thomas Ciszek:</h1>
      <img src={mugshot} style={{ maxWidth: "25%"}} alt="A selfie of myself"/>
      <p>I am a current student, enrolled in the Full Stack Coding Bootcamp through the University of Richmond. As I continue to deveop my skill in a wide variety of different languages and methods, I hope you consider checking out my past works as listed down below!</p>
      <p>I would emplore you to keep in mind however, that these projects will be changing and getting better as I progress though my course. If one of my projects disappears or is replaced, please be aware that I have deemed it too old and inadequate, compared to my more recent projects.</p>
    </section>
  )
}

export default About