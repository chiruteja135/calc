import React, { useState } from 'react';
import './App.css'
import * as math from 'mathjs';


function App() {
  let [input,setInput]=useState('');

  function clearinput(){
    setInput('')
    
  }

  function handleFunction(value){
    // if (value === '√') {
    //   setInput('sqrt(')
    //   // setInput(input => math.sqrt(input));
    // } 

    // else {
    // }
    if (value === "." && input.match(/\.(\d*)$/)) {
      return;
    }
    setInput(input+value);

  }

  function delFunction(){

    // setInput((input)=>input.slice(0,-1));
    setInput(input.slice(0,-1));
  }

  function calculate(){
    try {

      if (input.includes('√')) {
        const rep= input.match(/√\((.*?)\)/)[1];
        const result = math.sqrt(parseFloat(rep));
        setInput(result.toString());
        // setInput(input => math.sqrt(formInput));
      } else {

      const result = math.evaluate(input);
      setInput(result.toString());
      } 
    }
      catch (error) {
      setInput('Error');
    }

    // let outputVal = math.evaluate(input)
    // setInput(outputVal)

  }
  return (
    <center>
    <div className='container'>calculator
      <div >
        <button>text</button>
        <input type='text' className='display' value={input}></input>
      </div>
      <div className='keypad'>
        <button className='buttons btn1'onClick={()=>clearinput()}>CE</button>
        <button className='buttons btn1' onClick={()=>delFunction()}>Del</button>
        <button className='buttons btn1' onClick={()=>handleFunction('/')}>/</button>
        <button className='buttons btn1' onClick={()=>handleFunction('*')}>*</button>
        <button className='buttons btn1' onClick={() => handleFunction('√(')}>√(</button>
        <button className='buttons btn1' onClick={() => handleFunction('^2')}>^2</button>
        <button className='buttons btn1' onClick={() => handleFunction('^3')}>^3</button>
        <button className='buttons btn1' onClick={() => handleFunction('%')}>%</button>
        <button className='buttons' onClick={()=>handleFunction('9')}>9</button>
        <button className='buttons' onClick={()=>handleFunction('8')}>8</button>
        <button className='buttons' onClick={()=>handleFunction('7')}>7</button>
        <button className='buttons btn1' onClick={()=>handleFunction('-')}>-</button>
        <button className='buttons' onClick={()=>handleFunction('6')}>6</button>
        <button className='buttons' onClick={()=>handleFunction('5')}>5</button>
        <button className='buttons' onClick={()=>handleFunction('4')}>4</button>
        <button className='buttons btn1' onClick={()=>handleFunction('+')}>+</button>
        <button className='buttons' onClick={()=>handleFunction('3')}>3</button>
        <button className='buttons' onClick={()=>handleFunction('2')}>2</button>
        <button className='buttons' onClick={()=>handleFunction('1')}>1</button>
        <button className='buttons btn1' onClick={()=>handleFunction(')')}>)</button>
        <button className='buttons' onClick={()=>handleFunction('0')}>0</button>
        <button className='buttons btn1' onClick={()=>handleFunction('.')}>.</button>
        <button className='btn1 stretch' onClick={()=>calculate()}>=</button>

        
      </div>
    </div>
    </center>
  )

};



export default App;