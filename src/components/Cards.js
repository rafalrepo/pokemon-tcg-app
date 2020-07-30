import React, { useContext } from 'react';
import { CardsContext } from '../context/CardsContext';
import Card from './Card';
import '../css/cards.css'

const Cards = () => {

    const [[cards, setCards],,,[pageSize, setPageSize]] = useContext(CardsContext)

    const moreCard = () => {
        const newSize = parseInt(pageSize) + 3;
        
        setPageSize(newSize);
    }

    return(
        <>
        <section className="cards">
            {cards.map(card => (
                <Card key={card.id} card={card} />
            ))}
            
        </section>
        <button onClick={moreCard} className="cards__moreBtn">Pokaż więcej kart</button>
        </>
    )
}

export default Cards;