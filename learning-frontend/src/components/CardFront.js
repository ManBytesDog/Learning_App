import React, { useState } from 'react';
import UpdateCardForm from './UpdateCardForm'
import { FaTimes } from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa'

function CardFront({ card, deleteCard, updateCard }) {
    
    const [cardFlip, setCardFlip] = useState(false)

    const[showUpdateCard, setShowUpdateCard] = useState(false)


    return (
        <div 
        className={`card ${cardFlip ? 'cardFlip' : ''}`}
       
        >
            <div className="front">
                
                <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => deleteCard(card.id)} />
                {card.question}  <FaEdit style={{cursor: 'pointer'}} onClick={(e) => setShowUpdateCard(!showUpdateCard)}/>
                <br/>
                <br/>
                { showUpdateCard ? <UpdateCardForm id={card.id}/> : <img  onClick={() => setCardFlip(!cardFlip)}  className="image" src={card.image} alt='' />}
                {/* <div className="card-options"> */}
                {/* shows each option as a list */}
                    {/* {card.options.map(option => {
                        return <div className="card-option">{option}</div> */}
                    {/* })} */}
                {/* </div> */}
            </div>
            <div className="back">  <h2 onClick={() => setCardFlip(!cardFlip)}>{card.answer}</h2> </div>
            {/* <h2>{cardFlip ? card.answer : card.question}</h2> */}
        </div>
        )
}

export default CardFront;