import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'
import axios from 'axios'


function App() {

  const SAMPLE_CARDS = []

  const [cards, setCards] = useState(SAMPLE_CARDS)

  useEffect(() => {
    axios
    .get('http://localhost:3000/questions')
    .then(response => {
      setCards(response.data.map((cardData, index) => {
        return {
          id: `${index}`,
          subject_id: cardData.subject_id,
          question: cardData.question,
          answer: cardData.answer,
          image: cardData.image
        }
      }))
      console.log(response.data)
    })
  }, [])
  
  return (
    <div>
      <div className="App">
    <header className="App-header">
    
    <Navbar />
    
    </header>
      {/* <h1>App</h1> */}
      
      <CardContainer cards={cards}/>
      
      </div>
    </div>
  )
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

