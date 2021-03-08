import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'
import AddCard from './components/AddCard'
// import axios from 'axios'


function App() {

  // const FLASH_CARDS = []
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

  // useEffect(() => {
  //   axios
  //   .get('http://localhost:3000/questions')
  //   .then(response => {
  //     setCards(response.data.map((cardData, index) => {
  //       return {
  //         id: `${index}`,
  //         subject_id: cardData.subject_id,
  //         question: cardData.question,
  //         answer: cardData.answer,
  //         image: cardData.image
  //       }
  //     }))
  //     // console.log(response.data)
  //   })
  // }, [])

  //Add Card
  const addCard = (card) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newCard = { id, ...card }
    setCards([...cards, newCard])
  }

  // Delete Card
  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id))
  }
  
  return (
   
   <div>
      <div className="App">
    <header className="App-header">
    
    <Navbar onMakeCard={() => setShowAddCard(!showAddCard)}/>
    {showAddCard && <AddCard onAddCard={addCard} />}
    
    </header>
    
      <div className="container">
      {cards.length > 0 ? <CardContainer cards={cards} onDelete={deleteCard} /> : <h1>You Did It! Make More Cards!</h1>}
      </div>
      </div>
    </div>
  );
}
export default App;
// }

// const SAMPLE_CARDS = [
// {
//   "id": 8,
//   "subject_id": 20,
//   "question": "What is this color?",
//   "answer": "Red",
//   "image": "https://i.pinimg.com/564x/6b/81/52/6b815209f2b5f67eb1a693e32a64575a.jpg"
// },
// {
//   "id": 9,
//   "subject_id": 21,
//   "question": "2 + 2",
//   "answer": "4",
//   "image": ""
// }
// ]

  // state = {
  //   ages: [],
  //   subjects: [],
  //   questions: []
  // }


  // componentDidMount(){
  //   fetch("http://localhost:3000/ages")
  //     .then(response => response.json())
  //     .then(ageData => this.setState({ages: ageData}))
    
  //   fetch("http://localhost:3000/subjects")
  //     .then(response => response.json())
  //     .then(subjectData => this.setState({subjects: subjectData}))
      
  //   fetch("http://localhost:3000/questions")
  //     .then(response => response.json())
  //     .then(questionData => this.setState({questions: questionData}))
  // };

  // render() {

