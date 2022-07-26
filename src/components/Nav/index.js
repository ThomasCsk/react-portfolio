import React, {useEffect} from 'react';

const Nav = (props) => {
    const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);
  return (
    <nav>
      <ul className={`nav-buttons`}>
        <li className={`subtitle`}>
          <a data-testid="about" href="#about" onClick={() => {
            setCurrentCategory(categories[0]);
            setContactSelected(false)
            }}className={`${currentCategory.name==="About-Me" && 'navActive'}`}>
            About-Me
          </a>
        </li>
        <li className={`${currentCategory.name==="Contact-Me" && 'navActive'} subtitle`}>
          <span onClick={() => {
            setCurrentCategory(categories[2])
            setContactSelected(true)
          }}>Contact-Me</span>
        </li>
        <li className={`${currentCategory.name==="My-Projects" && 'navActive'} subtitle`}>
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