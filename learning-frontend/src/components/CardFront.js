import React, { useState } from 'react';

function CardFront({card}) {
    
    const [cardFlip, setCardFlip] = useState(false)


    return (
        <div 
        className={`card ${cardFlip ? 'cardFlip' : ''}`}
        onClick={() => setCardFlip(!cardFlip)} 
        >
            <div className="front">
                {card.question}
                <br/>
                <br/>
                <img className="image" src={card.image} />
                {/* <div className="card-options"> */}
                {/* shows each option as a list */}
                    {/* {card.options.map(option => {
                        return <div className="card-option">{option}</div> */}
                    {/* })} */}
                {/* </div> */}
            </div>
            <div className="back"> <h2>{card.answer}</h2> </div>
            {/* <h2>{cardFlip ? card.answer : card.question}</h2> */}
        </div>
        )
}

export default CardFront;