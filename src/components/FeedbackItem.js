import {FaTimes} from 'react-icons/fa' // font-awesome library from react-icons
import PropTypes from 'prop-types';
import Card from '../shared/Card';

function FeedbackItem(props){
    const review = props.review;
    return(
        <Card reverse = 'reverse'>
                <div className='num-display'>{review.rating}</div>
                <button onClick={props.delete} className='close'>
                    <FaTimes color = 'purple'></FaTimes>
                </button>
                <h3>{review.name}</h3>
                <div className='text-display'>{review.text}</div>  
        </Card>
    )
}

FeedbackItem.propTypes = {
    review: PropTypes.object
}

export default FeedbackItem;