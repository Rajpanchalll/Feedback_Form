import './App.css';
import { useState } from 'react';
import FeedbackData from './Components/Data'
import FeedbackForm from './Components/FeedbackForm';
import Loading from './Components/Loading';
import FeedbackState from './Components/FeedbackState';
import FeedbackList from './Components/FeedbackList';




function App() {



  const [Feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
      setFeedback(Feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback)=>{
    console.log(newFeedback)
  }


  return (
    <>
      <div className="Container">
        {/* <h1>FeedBack</h1> */}
      </div>
      <FeedbackForm addFeedback={addFeedback}/>
      <Loading />
      <FeedbackState Feedback={Feedback}/>
      <FeedbackList Feedback={Feedback} deleteFeedback={deleteFeedback} />
    </>
  );
}

export default App;
