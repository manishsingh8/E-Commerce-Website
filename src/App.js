import React from 'react';
import './App.css';
import Header from './components/Header';
import Baner from './components/Baner';
import Expert from './components/Expert';
import NewsLater from './components/NewsLater';
import Plans from './components/Plans';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Baner />
      <Expert />
      <NewsLater />
      <Plans />
      <Footer />
    </>
  );
}

export default App;
