import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';
import {motion, AnimatePresence} from 'framer-motion';
// import {useState} from 'react';

function FeedbackList(props){
    const data= props.data
    // console.log(data);

    const display = data.map( (review,idx) =>{
        return( 
            <motion.div key={idx}
            initial={{opacity: 0}}
            animate={{opacity:1}}
            exit = {{opacity:0}}
            transition={{duration: 0.3}}
            >
           < FeedbackItem review={review} key={review.id} delete={()=> props.delete(review.id)} />
           </motion.div>
        )
    })
    return(
        <AnimatePresence>
            {display}
        </AnimatePresence>   
    )
} 

FeedbackList.propTypes ={
    data: PropTypes.array
}

export default FeedbackList;