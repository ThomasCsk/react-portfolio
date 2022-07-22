import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const {name, description, website, github, index} = currentPhoto;
  console.log(name, description, website, github, index);
  return(
    <div>
      <div>
        <div>
          <h3>{name}</h3>
          <img src={require(`../../assets/ProjectScreenshots/${index}.PNG`)} alt="current project" />
          <p>{description}</p>
          <div>
            <a href={website} target='_blank' rel="noreferrer">Website</a>
            <a href={github} target='_blank' rel="noreferrer">GitHub</a>
          </div>
          <button onClick={onClose} type="button">Close this modal</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;