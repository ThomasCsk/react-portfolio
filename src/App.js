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
      <Nav>
        {/* setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected} */}
      </Nav>
      <main>
        {/* {!contactSelected ? ( */}
          <Projects></Projects>
          <About></About>
        {/*  ) : (*/}
          <Contact></Contact>
        {/* )}*/}
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
