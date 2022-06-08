import {useParams} from 'react-router-dom'

function Post(){
    const params = useParams();
    return(
        <>
        <br/>
        <h2> id: {params.id}</h2>
           <h2> name: {params.name}</h2>
           </>
    )
}

export default Post;