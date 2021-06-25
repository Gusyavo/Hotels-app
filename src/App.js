import React from 'react';
import './App.css';
import HotelsInfo from './components/HotelsInfo/HotelsInfo';

function App() {

  return (
    <div>
      <header className='header'>
        <h1>Hotels App</h1>
      </header>
      <main className='main'>
        <HotelsInfo />
      </main>
      <footer className='footer'>
        <p>Hotels App</p>
      </footer>
    </div>
  )
};

export default App;
