import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ Feedback, deleteFeedback }) => {
    // console.log(Feedback)

    return (
        <div className='container'>

            {
                Feedback.map((item) => (

                    <FeedbackItem key={item.id} item={item} deleteFeedback={deleteFeedback} />

                ))
            }

        </div>

    )
}

export default FeedbackList