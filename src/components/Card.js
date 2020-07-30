import React from 'react';


const Card = ( {card} ) => {
    return(
        <article>
            <img src={card.imageUrl} />
        </article>
    )
}

export default Card;