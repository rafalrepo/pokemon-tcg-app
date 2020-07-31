import React, { useContext } from 'react';
import { CardsContext } from '../context/CardsContext';
import '../css/cards.css';


const SearchCard = () => {

    const [,[name, setName],,] = useContext(CardsContext);

    return(
        <div className="cards__search">
            <input type="text" className="cards__searchInput" value={name} onChange={(e) => setName(e.target.value)} placeholder="search a card"/>
        </div>
    )
}


export default SearchCard;