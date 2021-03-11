import React, { useState } from 'react';
import CardFront from './CardFront';

function CardContainer({ cards, deleteCard, updateCard }) {

    
    
    
    return (
        <div className="card-grid">
            {cards.map(card => { 
                return <CardFront card={card} key={card.id} deleteCard={deleteCard} updateCard={updateCard} />
            })}

            
        
            
                
        </div>
    )
}

export default CardContainer;