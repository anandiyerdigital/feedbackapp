import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import {useState} from 'react'

import { FeedbackProvider } from './context/FeedbackContext';

import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';



function App() {


  const [feedback, setFeedback] = useState(FeedbackData);





  return (

    <>
    <FeedbackProvider >
    
    <Header text="Hello" bgColor='red' textColor = 'blue' />
    <div className="container">
      <FeedbackForm  />
      <FeedbackStats />
     <FeedbackList />
      
    </div>
    </FeedbackProvider>
    </>
  );
}

export default App;
