import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import PDF from "../src/assets/Colorido Gradiente Diseñador Gráfico Currículum.pdf"
const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner file={PDF}/>
      <Nav />
      <About />
      {/* <Services /> */}
      <Work />
      <Contact />
    </div>
  );
};

export default App;
