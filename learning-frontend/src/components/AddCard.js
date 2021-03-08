import React from 'react'
import { useState } from 'react'

function AddCard({ onAddCard }) {
    const [question, setQuestion] = useState('')
    const [image, setImage] = useState('')
    const [answer, setAnswer] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        
        if(!question) {
            alert('Please add a question')
            return 
        }
        
        onAddCard({ question, image, answer })
        
        setQuestion('')
        setImage('')
        setAnswer('')
    }

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

            <input type='submit' value='Create Card' className='btn btn-block'/>
        </form>
    )
};

export default AddCard;
