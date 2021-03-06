import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'


function App() {

  const [cards, setCards] = useState(SAMPLE_CARDS)
  
  return (
    <div>
      <div className="App">
    <header className="App-header">
    
    <Navbar />
    
    </header>
      <h1>App</h1>
      
      <CardContainer cards={cards}/>
      
      </div>
    </div>
  )
}
// }

const SAMPLE_CARDS = [
{
  "id": 8,
  "subject_id": 20,
  "question": "What is this color?",
  "answer": "Red",
  "image": "https://i2.wp.com/theteachingaunt.com/wp-content/uploads/2020/01/Colors-Flashcards-Free-Printables-RED.jpeg?resize=594%2C774&ssl=1"
},
{
  "id": 9,
  "subject_id": 21,
  "question": "2 + 2",
  "answer": "4",
  "image": ""
}
// {
//   id: 1,
//   question: '2 + 2',
//   answer: 4,
//   options: [
//     '4',
//     '3',
//     '1'
//   ]
// },
// {
//   id: 2,
//   question: '2 + 1',
//   answer: 3,
//   options: [
//     '4',
//     '3',
//     '1'
//   ]
// },
// {
//   id: 3,
//   question: '2 + 0',
//   answer:2,
//   options: [
//     '4',
//     '3',
//     '2'
//   ]
// }
]

export default App;
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
  //   }

  // render() {

