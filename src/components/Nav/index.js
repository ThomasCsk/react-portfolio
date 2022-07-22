import React from 'react';

const Nav = (props) => {
    const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;
  return (
    <nav>
      <ul className='general-flex'>
        <li className={`${!contactSelected && 'navActive'}`}>
          <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
            About-Me
          </a>
        </li>
        <li className={`${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact-Me</span>
        </li>
        <li className={`${!contactSelected && 'navActive'}`}>
          <span onClick={() => {
            setCurrentCategory(categories[1]);
            setContactSelected(false);
          }}>My-Projects</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;