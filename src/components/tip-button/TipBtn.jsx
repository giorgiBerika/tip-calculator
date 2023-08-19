import './TipBtn.css';

import { useState } from 'react';


const TipBtn = ({btnClicked, setBtnClicked, setTipValue, ...props}) =>
{
    // const [btnClicked, setBtnClicked] = useState(false);
    const btnClass = 'tip-button-clicked';
    const buttons = document.querySelectorAll('.tip-button');
    
    const classRemover = () =>
    {
        buttons.forEach((btn) => 
        {
            if(btn.classList.contains(btnClass))
            {
                btn.classList.remove(btnClass);
            }
        })
    }


    const mouseEnterHandler = (e) =>
    {
        const btn = e.target;
        
        (!(btn.classList.contains(btnClass)))
        ? btn.classList.add('tip-button-hover')
        : null;
    }

    const mouseLeaveHandler = (e) =>
    {
        const btn = e.target;
        
        const list = btn.classList;
        const btnClass = 'tip-button-hover';
        
        ((list.contains(btnClass)))
        ? list.remove(btnClass)
        : null;
    }

    const onClickHandler = (e) =>
    {
        const btn = e.target;
        
        const customBtn = document.querySelector('.custom-input')
        customBtn.value = '';

        

        classRemover();

        btn.classList.add(btnClass);
        setTipValue(props.number);
        setBtnClicked(true);
        
    }

    if(!btnClicked)
    {
        classRemover()
    }

    return (
        <button
            className='tip-button' 
            type='button' 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onClick={ onClickHandler}
            >
            {props.number}%
        </button>
    )
};

export default TipBtn;