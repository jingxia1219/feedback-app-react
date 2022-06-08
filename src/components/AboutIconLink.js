import {FaQuestion} from 'react-icons/fa';
import AboutPageLink from './AboutPageLink';

function AboutIconLink(){
return(
    <div className='about-link'>
       <AboutPageLink>
        <FaQuestion 
        size='30'
        />
    </AboutPageLink>
    </div>
)
}

export default AboutIconLink;