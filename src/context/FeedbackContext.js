import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {



    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'This is the first feedback',
            rating: 4
        },
        {
            id:2,
            text:'This is the second feedback',
            rating: 3
        },
        {
            id:3,
            text:'This is the third feedback',
            rating: 2
        },
        

    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
    
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id!== id ))
        }
    
      
    
      }

     const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
     } 

      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
      }  


      const updateFeedback = (id, updItem) => {
            setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem}: item))
      }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback

    }}>
        {children}
    </FeedbackContext.Provider>


}

export default FeedbackContext



