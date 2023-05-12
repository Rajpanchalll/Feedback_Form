import React, { useState } from 'react'
import Button from './Button';
import Ratings from './Ratings';


const FeedbackForm = ({ addFeedback }) => {

    const [text, settext] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating, setRating] = useState()
    const [message, setMessage] = useState('')




    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        settext(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
          const newFeedback = {
            text,
            rating,
          };
          addFeedback(newFeedback);
                settext('');
        }
      };
    



    return (
        <>
            {/* <h1>Header</h1> */}
            <card>
                <form action="" onSubmit={handleSubmit}>

                    <div className="input-group">
                        <input type="text" name="AddItems" placeholder='Write a Review' onChange={handleTextChange} value={text} />
                        <Button isDisabled={btnDisabled} />
                    </div>
                    <div>{message}</div>
                </form>
                <Ratings select={(rating) => setRating(rating)} />
            </card>
        </>
    )
}

export default FeedbackForm