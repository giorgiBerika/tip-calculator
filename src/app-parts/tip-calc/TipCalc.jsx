import './TipCalc.css';
import { useState, useEffect } from 'react';
import {BillInput, TipBtn, CustomBtn, PeopleInput} from '../../components';

const TipCalc = ({ setTipAmount ,setTotalTip,
                  tipValue, setTipValue, bill, setBill, personNum, setPersonNum,
                  resetRes, setResetRes}) =>
{
    const [btnClicked, setBtnClicked] = useState(false);


    let tipBtnArr = Array.from({length: 5});

    useEffect(() => {
        if(tipValue && bill && personNum)
    {
        let tip = parseFloat(bill * (tipValue / 100) / personNum).toFixed(2);
        let total = parseFloat(((bill / personNum) + parseFloat(tip))).toFixed(2);
        setTipAmount(tip);
        setTotalTip(total);

    }
   

    if(resetRes)
        {
            const inputs = document.querySelectorAll('.default-input');

            inputs.forEach((input) => 
            {
                input.value = '';
            })

            const customBtn = document.querySelector('.custom-input')
            customBtn.value = '';

            setBtnClicked(false);

            setBill(0);
            setPersonNum(0);
            setTipValue(0);

            setTotalTip('0.00')
            setTipAmount('0.00')

            setResetRes(false)
        }
    }, [tipValue, bill, personNum, resetRes, setResetRes])    

   
    

    return (
        <div className='calc-part-wrapper'>
            <div className='calc-paragraph'>
                <h2 className='calc-paragraph-title'>bill</h2>
                <BillInput 
                    setBill={setBill}/>
            </div>
            <div className='calc-paragraph'>
                <h2 className='calc-paragraph-title'>select tip %</h2>
                <div className='tip-list-wrapper'>
                    {tipBtnArr.map((_, index) => (
                        <TipBtn 
                            setBtnClicked={setBtnClicked}
                            btnClicked={btnClicked}
                            setTipValue={setTipValue}
                            number={
                                (index <= 2) 
                                ? ((index + 1) * 5)
                                : (index === 3)
                                ? 25
                                : 50}
                            
                                key={index}
                        />
                    ))}
                    <CustomBtn 
                            setBtnClicked={setBtnClicked}
                            btnClicked={btnClicked}
                            setTipValue={setTipValue}    
                    />
                    
                </div>
            </div>
            <div className='calc-paragraph'>
                <h2 className='calc-paragraph-title'>number of people</h2>
                <PeopleInput 
                setPersonNum={setPersonNum}
                bill={bill}
                personNum={personNum}/>
            </div>
        </div>
    )
};

export default TipCalc;