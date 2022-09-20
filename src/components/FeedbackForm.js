import Card from './shared/Card.js'
import React from 'react'
import { useState, useEffect } from 'react'
import Button from './shared/Button.js'
import RatingSelect from './RatingSelect.js'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext.js'

const FeedbackForm = () => {


    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(10)


    useEffect(() => {
       
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    }, [feedbackEdit])

    const handleTextChange = (e) => {
        
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage("Please enter a valid text more than 10 characters")
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }        
        setText(e.target.value)


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            text,
            rating,
        }

        if(feedbackEdit.item === true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
        }
        else {
            
        addFeedback(newFeedback)
        }

    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our service?</h2>
            <RatingSelect select={(rating) => setRating(rating) }/>
            <div className='input-group'>
                <input type="text" placeholder='write a review' value={text} onChange={handleTextChange}/>
                <Button type='submit' isDisabled={btnDisabled} version="primary">Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>

    </Card>
  )
}

export default FeedbackForm