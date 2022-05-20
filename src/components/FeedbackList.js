import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';
// import {useState} from 'react';

function FeedbackList(props){
    const data= props.data
    // console.log(data);

    const display = data.map( review =>{
        return( 
           < FeedbackItem review={review} key={review.id} delete={()=> props.delete(review.id)} />
        )
    })
    return(
        <ul>
            {display}
        </ul>
        
    )
} 

FeedbackList.propTypes ={
    data: PropTypes.array
}

export default FeedbackList;