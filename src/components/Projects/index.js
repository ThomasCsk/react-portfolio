import React, {useState} from 'react'
import Modal from '../Modal';

const Project = () => {
  const projects = [
    {
      name: 'Run Buddy',
      description: 'A website made with HTML and CSS, meant to be a website for a personal trainer company',
      website: 'https://thomascsk.github.io/run-buddy/',
      github: 'https://github.com/ThomasCsk/run-buddy'
    },
    {
      name: 'Password Generator',
      description: 'A website made with HTML, CSS, and JavaScript. This website generates a randomized password based on a series of parameters.',
      website: 'https://thomascsk.github.io/password-generator/',
      github: 'https://github.com/ThomasCsk/password-generator'
    },
    {
      name: 'Life Explorer',
      description: 'A Website made with HTML, CSS, and JavaScript. This website functions as a vacation planner that allows users to input a location, date, and activity description and have a planner that tells them the weather in that location on that day.',
      website: 'https://melliott7264.github.io/vacation-planner/',
      github: 'https://github.com/melliott7264/vacation-planner'
    },
    {
      name: 'Work Day Scheduler',
      description: 'A Website made with HTML, CSS, and JavaScript. This website was made to allow workers to better manage their tasks throughout the day.',
      website: 'https://thomascsk.github.io/work-day-scheduler/',
      github: 'https://github.com/ThomasCsk/work-day-scheduler'
    },
    {
      name: 'Our Music',
      description: 'A Website made with Node.js, Express.js, and MySQL. This website allows users to make a playlist of songs by looking up one song, and getting recommendations based on it.',
      website: 'https://music-suggestion-app.herokuapp.com/',
      github: 'https://github.com/chlucas324/music-suggestion'
    },
    {
      name: 'First Portfolio',
      description: 'A Website made with HTML and CSS. This is the first portfolio that I built for myself, so not only is it sentimental to me, it also shows exactly how far I have come.',
      website: 'https://thomascsk.github.io/portfolio/',
      github: 'https://github.com/ThomasCsk/portfolio'
    },
    {
      name: "Tondo 69er's Foundation",
      description: 'A Website made with MERN, Apollo, and Graphql. This is a project I am currently working on for the non-profit foundation under the same name. This is an ongoing project I have that is testing the knowledge I have accrued.',
      website: 'https://pacific-temple-86058.herokuapp.com/',
      github: 'https://github.com/ThomasCsk/foundation'
    },
  ]

  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }
  return (
    <section className='project-links'>
      <h2 className='subtitle'>My-Projects!</h2>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      {projects.map((image, i) => (
        <div className='single-project'>
          <p className='subtitle'>{projects[i].name}</p>
          <img
            src={require(`../../assets/ProjectScreenshots/${i}.PNG`)}
            alt={image.name}
            onClick={() => toggleModal(image, i)}
            key={image.name + i}
          />
        </div>
        ))}
    </section>
  )
}

export default Project;