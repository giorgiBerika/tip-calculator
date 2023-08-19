import './ResultComp.css'

import { useEffect } from 'react';

const ResultComp = ({tipAmount, totalTip,resetRes, setResetRes, ...props}) =>
{
    useEffect(() => {

    (resetRes) && setResetRes(false);
    }, [resetRes, setResetRes])
    
    
    return (
        <div className='result-info'>
            <div className='result-info-text'>
                <h3>{props.infoType}</h3>
                <span>/ person</span>
            </div>
            <h2 className={props.resultClass}>${props.tipNum }</h2>
        </div>
    )
}

export  default ResultComp;