import Card from '../shared/Card'

function FeedbackForm(){
    return(
        <Card>
            <form>
                <h2>
                    Review a movie
                    {/* rating select component */}
        
                </h2>
                <div className='input-group'>
                    <input type='text' placeholder='Movie to review...'></input>
            </div>
            </form>
        </Card>
    )
}

export default FeedbackForm;