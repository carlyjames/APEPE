import './App.css';
import React from 'react'
import { Banner, Footer, Links, Listings } from './Components';

function App() {
  return (
    <div className="App">
      <Banner />
      <Links />
      <Listings />
      <Footer />
    </div>
  );
}

export default App;
