import React from 'react';
import './App.css';
import Cards from './components/Cards';
import { CardsProvider } from './context/CardsContext';
import SearchCard from './components/SearchCard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <CardsProvider>
          <SearchCard />
          <Cards />
        </CardsProvider>
      </div>
    </div>
  );
}

export default App;
