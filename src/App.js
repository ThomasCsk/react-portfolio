import React, {useState} from 'react';
import About from './components/About';
import Contact from './components/Contact';
// import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  const [categories] = useState([
    { name: 'About-Me', description: 'A brief summary about myself'},
    { name: 'My-Projects', description: 'List of my projects with links' },
    { name: 'Contact-Me', description: 'Email form' }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <About></About>
        ) : (
          <Contact></Contact>
        )}
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
