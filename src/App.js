import React from 'react';
import './App.css';
import Cards from './components/Cards';
import { CardsProvider } from './context/CardsContext';

function App() {
  return (
    <div className="App">
      <CardsProvider>
        <Cards />
      </CardsProvider>
    </div>
  );
}

export default App;
