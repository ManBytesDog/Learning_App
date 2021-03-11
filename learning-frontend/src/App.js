import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'
import AddCardForm from './components/AddCardForm'


function App() {

  const[showAddCard, setShowAddCard] = useState(false)

  

  const [cards, setCards] = useState([])

    useEffect(() => {
      const getCards = async () => {
        const cardsFromServer = await fetchCards()
        setCards(cardsFromServer)
      }

      getCards()
    }, [])

    // Fetch Cards
    const fetchCards = async () => {
      const response = await fetch('http://localhost:3000/questions')
      const cardData = response.json()

      return cardData
    }

    //Update Card
    const updateCard = async (id) => {
      const response = await fetch(`http://localhost:3000/questions/${id}`)
      const cardData = response.json()

      return cardData
    }

  //Add Card
  const addCard = async (card) =>{
    const response = await fetch('http://localhost:3000/questions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(card),
      
    })

    const newCard = await response.json()
    setCards([...cards, newCard])

  }

  // Delete Card
  const deleteCard = async (id) => {
    await fetch(`http://localhost:3000/questions/${id}`, {
      method: 'DELETE'
    })

    setCards(cards.filter((card) => card.id !== id))
  }
  
  return (
   
   <div>
      <div className="App">
    <header className="App-header">
    
    <Navbar onMakeCard={() => setShowAddCard(!showAddCard)}/>
    {showAddCard && <AddCardForm addCard={addCard} />}
    
    </header>
    
      <div className="container">
      {cards.length > 0 ? <CardContainer cards={cards} deleteCard={deleteCard} updateCard={updateCard} /> : <h1>You Did It! Make More Cards!</h1>}
      </div>
      </div>
    </div>
  );
}
export default App;
