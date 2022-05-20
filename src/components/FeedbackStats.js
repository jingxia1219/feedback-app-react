import PropTypes from 'prop-types';

function FeedbackStats(props){
    const data = props.data
    const length = data.length;
    const averageRating = data.reduce((acc,cur)=>{
        return acc+cur.rating
    },0)/length;
    return(
        <div className="feedback-stats">
            <h4>{length} Reviews</h4>
            <h4>Average Rating: {length && averageRating.toFixed(1).replace(/[.]0$/,'')}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats;