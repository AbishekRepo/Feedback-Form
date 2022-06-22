import React, {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import feedbackData from '../Data/FeedbackData'

const FeedbackContext = createContext()

export function FeedbackProvider({children}) {

  const[feedbackEdit, setFeedbackEdit] = useState({
    item : {},
    edit : false
  })

  const [feedback, setFeedback] = useState(feedbackData)

  function addFeedback(newFeedback){
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  function deleteFeedback(id){
    if(window.confirm('Are you sure you want to delete this feedback')){
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  function editFeedback(item){
    setFeedbackEdit({
      item,
      edit : true
    })
  }

  function updateFeedBack(id, upItem){
      setFeedback(feedback.map((item) => item.id === id ? {...item, ...upItem} : item))
  }

  return (
    <FeedbackContext.Provider value = {{
      feedback,
      feedbackEdit,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedBack,
    }}>
        {children}
    </FeedbackContext.Provider>
    
  )
}

export default FeedbackContext
