import './ResetBtn.css';

const ResetBtn = ({setResetRes}) =>
{
    return (
        <button 
        onClick={() => {setResetRes(true)}}
        className='tip-reset-btn' type='button' >reset</button>
    )
};



export default ResetBtn;