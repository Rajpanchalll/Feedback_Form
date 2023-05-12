import React from 'react'

const FeedbackItem = ({item, deleteFeedback}) => {
  
  return (
   <div className='Container'>
      <div className='card'>
        <p>{item.id}</p>
        <p>{item.text}</p>
       <button onClick={()=>{deleteFeedback(item.id)}}  className='btn-primary btn'>Delete?</button>
    </div>
   </div>
  )
}

export default FeedbackItem