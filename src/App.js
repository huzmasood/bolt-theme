import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Section from './Components/Section/Section';
import Article from './Components/Article/Article';
import DownloadApp from './Components/DownloadApp/DownloadApp';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Article upper='yes' />
      <hr style={{marginLeft: '150px', marginRight: '150px', marginBottom: '160px', opacity: '0.1'}} />
      <Article />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;