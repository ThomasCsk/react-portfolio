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
      {categories.map((category) => (
        <li
          className={`mx-1 ${
            currentCategory.name === category.name && !contactSelected && `navActive`
            }`}
          key={category.name}
        >
          <span onClick={() => {
              setCurrentCategory(category);
              setContactSelected(false);
            }}
          >
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
);
}

export default Nav;