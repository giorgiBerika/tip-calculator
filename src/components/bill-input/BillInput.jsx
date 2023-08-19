import './BillInput.css';
import '../../styles/DefaultInput.css';
import dollarSign from '../../assets/icon-dollar.svg';


const BillInput = ({setBill}) =>
{
    const onChangeHandler = (e) =>
    {
        const input = e.target;

        const val = (input.value === '') ? '' : parseFloat(input.value); 

        setBill(val);
        
    }


    
    return (
        <div className='input-wrapper'>
            <img className='input-icon-img' src={dollarSign} alt='Dollar sign'/>
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

export default BillInput;