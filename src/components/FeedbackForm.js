import Card from '../shared/Card'
import {useState} from 'react'

function FeedbackForm(props){
    const [name,setName] = useState('')
    const [review,setReview] = useState('')
    const [btnClass,setBtnClass] = useState('btn')
    function submitHandler(e){
        e.preventDefault();
        props.submitReview({name:name,text:review})
        setName('')
        setReview('')
    }
    function nameHandler(e){
        setName(e.target.value);
        if(e.target.value.trim().length>2 && review.trim().length >7){
            setBtnClass('btn-active')
        } else {
            setBtnClass('btn')
        }
    }
    // console.log(btnClass)
    function reviewHandler(e){
        setReview(e.target.value)
        if(e.target.value.trim().length>7 && name.trim().length >2){
            // console.log('review handler btn',btnClass)
            setBtnClass('btn-active')
        } else {
            setBtnClass('btn')
        }
        // console.log('review',review)
    }
    // console.log('btn calss name',btnClass)
    return(
        <Card>
            <form>
                <h2>
                    Review a movie
                    {/* rating select component */}
        
                </h2>
                <div className='input-group'>
                    <input value={name} onChange={nameHandler}  className='input-name' type='text' placeholder='Movie to review...'></input>
                    <textarea value={review} onChange={reviewHandler} className='input-review' type='text' placeholder='Start your review here...'></textarea>
                </div>
                <button className={btnClass} onClick={submitHandler} type='submit'>Submit</button>
            </form>
        </Card>
    )
}

export default FeedbackForm;