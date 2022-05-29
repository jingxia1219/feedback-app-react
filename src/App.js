import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import {useState} from 'react';

function App(){
    const [data,setData] = useState(FeedbackData);
    function deleteHandler(id){
            setData( prev=> {
            return prev.filter( el=> el.id !== id)
            })
    }
    function submitHandler(review){
        setData( prev =>{
            return prev.concat({...review,id: prev.length+1})
        })
    }
    console.log('data:',data)
    return(
        <>
       <Header text='Movie Review App' bgColor = 'blue' textColor = 'red'/>
       <FeedbackStats data={data} />
         <div className='container'>
            <FeedbackForm submitReview={submitHandler}/>
            <FeedbackList data = {data} delete={deleteHandler}/>
        </div>
        </>
    )
}

export default App;
