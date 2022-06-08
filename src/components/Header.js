import {Link} from 'react-router-dom';
import AboutPageLink from './AboutPageLink';

function Header(props){
    const headerSyles = {backgroundColor:props.bgColor,color:props.textColor}
    return (
        <header style={headerSyles}>
          <div className='container'>
              <h2>
                  {props.text}
              </h2>
                    <div className='page-links' >
                       <Link to='/'>
                             Home
                         </Link>
                        <AboutPageLink>About</AboutPageLink>
                    </div>
          </div>
          </header>  
    )
}


export default Header;