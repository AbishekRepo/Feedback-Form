import React, {useContext, useState, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

  

    const {addFeedback, feedbackEdit, updateFeedBack} = useContext(FeedbackContext)

    const [description, setDescription] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(() => {
        if(feedbackEdit.edit === true){
        setIsDisabled(false)
        setDescription(feedbackEdit.item.description)
        setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    function handleChange(e){
        if(description === ''){
            setIsDisabled(true)
            setMessage(null)
        }else if(description !== '' && description.trim().length <= 10){
            setIsDisabled(true)
            setMessage('please enter atlest 10 character')
        }else{
            setIsDisabled(false)
            setMessage(null)
        }
            setDescription(e.target.value)
        }

        function handleSubmit(e){
            e.preventDefault()
            if(description.trim().length > 10){
                const newFeedback = {
                description,
                rating
                }

                if (feedbackEdit.edit === true) {
                    updateFeedBack(feedbackEdit.item.id, newFeedback)
                  } else {
                    addFeedback(newFeedback)
                  }
                 setDescription('') 
            }

        }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleChange} type="text" placeholder="write a feedback" value={description}/>
                <Button type="submit" isDisabled={isDisabled}>send</Button>
            </div>

            {message && <div className="message">{message}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm