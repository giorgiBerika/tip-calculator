import './CustomBtn.css';

const CustomBtn = ({setBtnClicked, setTipValue}) =>
{
    
    const changeHandler = (e) =>
    {
        const inputVal = e.target.value;

        setTipValue(inputVal);
    }

    

    return (
        <input 
         className='custom-input'
         type='number'
         placeholder='Custom'
         onClick={ () => {setBtnClicked(false)}}
         onChange={changeHandler}
         
        />
    )
};

export default CustomBtn;