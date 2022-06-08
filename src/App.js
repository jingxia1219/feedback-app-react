import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import {useState} from 'react';
import AboutPage from './pages/AboutPage';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink';
// import Post from './components/Post'

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
    <BrowserRouter>
       <Header text='Movie Review App' bgColor = 'blue' textColor = 'red'/>
                 
       <FeedbackStats data={data} />
       
         <div className='container'>
             <Routes>
                 <Route path='/' element={
                     <>
                     <FeedbackForm submitReview={submitHandler}/>
                     <FeedbackList data = {data} delete={deleteHandler}/>
                     </>
                 }>
                </Route>
                <Route path='/about' element={<AboutPage />}/>
                {/* <Route path='/post/:id/:name' element={<Post/>}/> */}
            </Routes>
            <AboutIconLink/>
        </div>
    </BrowserRouter>
    )
}

export default App;
