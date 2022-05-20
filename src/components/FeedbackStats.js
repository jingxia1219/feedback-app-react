import PropTypes from 'prop-types';

function FeedbackStats(props){
    const data = props.data
    const length = data.length;
    const averageRating = data.reduce((acc,cur)=>{
        return acc+cur.rating
    },0)/length;
    return(
        <div className="feedback-stats">
            <h4>{length} &nbsp; Reviews</h4>
            <h4>Average Rating&nbsp; &nbsp;: &nbsp; {length && averageRating.toFixed(1).replace(/[.]0$/,'')}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array
}

export default FeedbackStats;