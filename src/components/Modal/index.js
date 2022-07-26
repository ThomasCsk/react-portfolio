import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const {name, description, website, github, index} = currentPhoto;
  console.log(name, description, website, github, index);
  return(
    <div className='modalBackground'>
      <div className='modalCard'>
        <div>
          <h3 className='modalTitle'>{name}</h3>
        </div>
        <div className='modalContent'>
          <img src={require(`../../assets/ProjectScreenshots/${index}.PNG`)} alt="current project" />
          <p className='modalTitle'>{description}</p>
        </div>    
        <div className='modalButtons'>
          <a href={website} className='button is-link' target='_blank' rel="noreferrer">Website</a>
          <a href={github} className='button is-link' target='_blank' rel="noreferrer">Git Hub</a>
          <button onClick={onClose} className='button'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;