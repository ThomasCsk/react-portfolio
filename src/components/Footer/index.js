import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div> 
          <h3>Contact Info</h3>
      </div> 
      <div className="footer-contact"> 
          <div> 
              <p>P: (540) 415-2024</p>
          </div> 
          <div> 
              <a href="https://github.com/ThomasCsk" target='_blank' rel="noreferrer">GitHub</a>
          </div> 
          <div> 
              <a href="https://www.linkedin.com/in/thomas-ciszek-05a82322a" target='_blank' rel="noreferrer">LinkedIn</a>
          </div>
          <div>
            ©2022
          </div>
      </div>
    </footer>
  )
}

export default Footer;