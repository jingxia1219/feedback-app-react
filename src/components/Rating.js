import {useState} from 'react';

function Rating({getRating}){
    const [selected,setSelected] = useState(10)
    function changeHandler(e){
        setSelected(+e.target.id)
        getRating(+e.target.id)
    }

    console.log(selected === 1)
    return(
        <ul className='rating'>
            <li>
                <div className={`rating-icon ${selected === 1}`} id='1' onClick={changeHandler} >1</div>
            </li>

            <li>
                <div className={`rating-icon ${selected ===2}`} id='2' onClick={changeHandler} >2</div>
            </li>

            <li>
                <div className={`rating-icon ${selected ===3}`} id='3' onClick={changeHandler} >3</div>
            </li>

            <li>
                <div className={`rating-icon ${selected===4}`} id='4' onClick={changeHandler} >4</div>
            </li>

            <li>
                <div className={`rating-icon ${selected===5}`} id='5' onClick={changeHandler} >5</div>
            </li>

            <li>
                <div className={`rating-icon ${selected===6}`} id='6' onClick={changeHandler} >6</div>
            </li>

            <li>
                <div className={`rating-icon ${selected===7}`} id='7' onClick={changeHandler} >7</div>
            </li>

            <li>
                <div className={`rating-icon ${selected===8}`}id='8' onClick={changeHandler} >8</div>
            </li>

            <li>
                <div className={`rating-icon ${selected===9}`} id='9' onClick={changeHandler} >9</div>
            </li>

            <li>
                <div className={`rating-icon ${selected===10}`} id='10' onClick={changeHandler} >10</div>
            </li>

        </ul>
    )
}

export default Rating;