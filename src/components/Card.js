import React from 'react';
import '../css/cards.css'


const Card = ( {card} ) => {
    return(
        <article className="cards__singleCard">
            <img src={card.imageUrl} className="singleCard__img"/>
        </article>
    )
}

export default Card;