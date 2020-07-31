import React, { useContext } from 'react';
import { CardsContext } from '../context/CardsContext';
import Card from './Card';
import '../css/cards.css'

const Cards = () => {

    const [[cards, setCards],[name],,[pageSize, setPageSize], [loading, setLoading]] = useContext(CardsContext)

    const moreCard = () => {
        setLoading(true);
        const newSize = parseInt(pageSize) + 3;
        setPageSize(newSize);
    }

    return(
        <>
        <section className="cards" style={{
            display: loading ? 'none' : 'flex'
        }}>
            {cards.length > 0 ? 
                cards.map(card => (
                    <Card key={card.id} card={card} />
                )) :
                <div className="alert alert--error">Nie ma kart o podanym wyszukiwaniu: <span className="alert__textDecoration">{name}</span></div>
            }
                    
        </section>
        <div style={{
            display: loading ? 'block' : 'none'
        }} className="alert alert--loading">
            Loading...
        </div>
        <button onClick={moreCard} className="cards__moreBtn">Pokaż więcej kart</button>
        </>
    )
}

export default Cards;