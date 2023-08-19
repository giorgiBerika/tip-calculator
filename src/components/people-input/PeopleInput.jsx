import './PeopleInput.css';
import '../../styles/DefaultInput.css';
import personSign from '../../assets/icon-person.svg'

import { useEffect } from 'react';

const PeopleInput = ({setPersonNum, bill, personNum}) =>
{
    const onChangeHandler = (e) =>
    {
        const input = e.target;
        const val = (input.value === '') ? '' : parseFloat(input.value); 
        setPersonNum(val)

    }

    useEffect(() => {
        const peopleInput = document.querySelector('.people-input');
        

        (bill > 0 && (personNum === 0 ||  personNum === '') ) && peopleInput.classList.add('people-num-input'); 
        (bill === 0 || bill === '' || personNum > 0) && peopleInput.classList.remove('people-num-input');
        
    }, [bill, personNum]) 
    
    return (
        <div className='input-wrapper people-input'>
            <img className='input-icon-img' src={personSign} alt='Person sign'/>
            <input  
                className='default-input' 
                type='number' 
                placeholder='0'
                maxLength='15'
                onChange={onChangeHandler}
            />    
        </div>
    )
};

export default PeopleInput;