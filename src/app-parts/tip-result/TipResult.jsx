import './TipResult.css';

import { ResultComp, ResetBtn } from '../../components';

const TipResult= ({tipAmount, totalTip, resetRes, setResetRes}) =>
{
    return (
        <div className='tip-result-wrapper'>
            <div className='tip-result-top'>
                <ResultComp
                    resetRes={resetRes}
                    setResetRes={setResetRes} 
                    infoType="tip-amount"
                    resultClass="tip-amount"
                    tipNum={tipAmount}
                    />
                <ResultComp
                    resetRes={resetRes}
                    setResetRes={setResetRes} 
                    infoType="total"
                    resultClass="total-amount"
                    tipNum={totalTip}/>
            </div>
            <div className='tip-result-bottom'>
                <ResetBtn 
                    setResetRes={setResetRes}
                    />
            </div>
        </div>
    )
};

export default TipResult;