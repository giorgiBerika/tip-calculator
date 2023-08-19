import { useState } from 'react'
import './App.css'

import {TipCalc, TipResult} from './app-parts';

import logo from './assets/logo.svg'

function App() {


  const [resetRes, setResetRes] = useState(false); 

  const [tipAmount, setTipAmount] = useState('0.00');
  const [totalTip, setTotalTip] = useState('0.00');

  const [tipValue, setTipValue] = useState(0);
  const [bill, setBill] = useState(0);
  const [personNum, setPersonNum] = useState(0);
  return (
   <div className='container'>
      <img src={logo} alt='splitter logo'/>
      <div className='app-wrapper'>
        <TipCalc 
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
          totalTip={totalTip}
          setTotalTip={setTotalTip}
          
          tipValue={tipValue}
          setTipValue={setTipValue}
          bill={bill}
          setBill={setBill}
          personNum={personNum}
          setPersonNum={setPersonNum}

          resetRes={resetRes}
          setResetRes={setResetRes}
          />
        <TipResult 
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
          totalTip={totalTip}
          setTotalTip={setTotalTip}
          resetRes={resetRes}
          setResetRes={setResetRes}/>

      </div>

   </div>  
  )
}

export default App
