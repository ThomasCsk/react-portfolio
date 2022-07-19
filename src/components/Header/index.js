import React from 'react';
import Nav from '../Nav';

const Header = (props) => {
      const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;
  return (
    <header className="general-flex"> 
      <div> 
        <a href='/'>
          <h1>Thomas Ciszek's Portfolio</h1>
        </a>
      </div>
      <Nav         
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
    </header>
  );
}

export default Header;