import Card from '../shared/Card'
import Button from '../shared/Button'
import {useState} from 'react'
import Rating from './Rating';


function FeedbackForm(props){
    const [name,setName] = useState('')
    const [review,setReview] = useState('')
    const [btnClass,setBtnClass] = useState('btn')
    const [reviewMessage,setReviewMessage] = useState('')
    const [nameMessage,setNameMessage] = useState('')
    const [rating, setRating] = useState(10);

    function getRating(ratingInput){
        setRating(ratingInput)
    }

    function submitHandler(e){
        e.preventDefault();
        props.submitReview({name:name,text:review,rating:rating})
        setName('')
        setReview('')
        setRating(10)
    }


    function nameHandler(e){
        setName(e.target.value);
        if(e.target.value.trim().length>=2 ){
            setNameMessage('')
            if (review.trim().length >7){
                setBtnClass('btn-active')
            }  
        } else {
            setBtnClass('btn')
            setNameMessage('please enter a name of at least 2 chars...')
        }
    }
    function reviewHandler(e){
        setReview(e.target.value)
        if(e.target.value.trim().length>7 ){
            setReviewMessage('')
            if  (name.trim().length >2){
                setBtnClass('btn-active')
            }
        } else {
            setReviewMessage('Review needs to be at least 7 chars...')
            setBtnClass('btn')
        }
    }
    return(
        <Card>
            <form>
                <h2>
                    Review a movie
                    {/* rating select component */}
                    <div className="star-rating">
                    Rating Select
        </div>
                <Rating getRating={getRating} />
                </h2>
                <div className='input-group'>
                    <input value={name} onChange={nameHandler}  className='input-name' type='text' placeholder='Movie to review...'></input>
                    <textarea value={review} onChange={reviewHandler} className='input-review' type='text' placeholder='Start your review here...'></textarea>
                    {reviewMessage && <li className='message'>{reviewMessage}</li>}
                    {nameMessage && <li className='message'>{nameMessage}</li>}
                </div>
                <Button btnClass={btnClass} clickHandler={submitHandler} type='submit'>Submit</Button>
            </form>
        </Card>
    )
}

export default FeedbackForm;