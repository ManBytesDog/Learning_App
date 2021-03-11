import React from 'react'
import { useState } from 'react'

function UpdateCardForm({ id }) {
    const [question, setQuestion] = useState('')
    const [image, setImage] = useState('')
    const [answer, setAnswer] = useState('')

    
    const onSubmit = (e) => {
        e.preventDefault()
        
        fetch(`http://localhost:3000/questions/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({question, image, answer})
        })
        
        if(!question) {
            alert('Please add a question')
            return 
        }
        
    //Update Card
    // const updCard = async (id) => {

    //     const response = await fetch(`http://localhost:3000/questions/${id}`)
    //     const cardData = response.json()
  
    //     return cardData
    //   }
            

        setQuestion('')
        setImage('')
        setAnswer('')
    }

    // const  updateCard = async (id) => {
    //     const cardToUpdate = await fetchCard(id)
    //     const updatedCard = {...cardToUpdate, }
    // }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Question:</label>
                <input type='text' placeholder='Type Card Question' 
                    value={question} onChange={(e) => setQuestion(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Card Image:</label>
                <input type='text' placeholder='Insert Card Image' 
                    value={image} onChange={(e) => setImage(e.target.value)}/>
                    
            </div>
            <div className='form-control'>
                <label>Answer:</label>
                <input type='text' placeholder='Type Card Answer' 
                    value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                    
            </div>

            <input type='submit' value='Edit Card' className='btn btn-block'/>
        </form>
    )
};

export default UpdateCardForm;