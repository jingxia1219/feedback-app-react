import {Link} from 'react-router-dom';

function AboutPageLink(props){
    return(
        <Link to={{
            pathname:'/about',
            search:'?sort=name',
            hash:'#hello'
    }}>
        {props.children}
    </Link>
    )
}

export default AboutPageLink;