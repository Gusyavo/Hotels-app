import React from 'react';
import './App.css';
import HotelsList from './components/HotelsTable/HotelsInfo';

function App() {

  return (
    <div>
      <header className='header'>
        <h1>Hotels App</h1>
      </header>
      <main className='main'>
        <HotelsList />
      </main>
      <footer className='footer'>
        <p>Hotels App</p>
      </footer>
    </div>
  )
};

export default App;
