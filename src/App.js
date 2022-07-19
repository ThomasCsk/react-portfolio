import React, {useState} from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {
  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      
      <main>
        <Nav>
        {/* setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected} */}
      </Nav>
        {/* {!contactSelected ? ( */}
          <Projects></Projects>
          <About></About>
        {/*  ) : (*/}
          <Contact></Contact>
        {/* )}*/}
        <Footer></Footer>
      </main>
      
    </div>
  );
}

export default App;
