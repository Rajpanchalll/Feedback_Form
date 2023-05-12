import React from 'react'

const FeedbackState = ({Feedback}) => {

    let average =
    Feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / Feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/, '');
    console.log(average);


  return (
    <div className='rating'>
         <h4 className='right'>Reviews: {Feedback.length}</h4>
            
         <h4>average rating: {isNaN(average) ? 0 : average}</h4>

    </div>
  )
}

export default FeedbackState