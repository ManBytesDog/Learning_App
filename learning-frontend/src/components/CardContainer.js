import React, { useState } from 'react';
import CardFront from './CardFront';
// import CardBack from './CardBack';

function CardContainer({ cards }) {
    
    return (
        <div className="card-grid">
            {cards.map(card => { 
                return <CardFront card={card} key={card.id} />
            })}

            
        
            {/* <CardBack /> */}
                
        </div>
    )
}

export default CardContainer;