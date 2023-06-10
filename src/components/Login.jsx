import React, { useState, useRef } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

// import image
import Panda from '../assets/1s.png'
import Bird from '../assets/2s.png'
import BubbleChat from '../assets/19s.png'

const Login = () => {
  const [ isWrong, setIsWrong] = useState(false);
  const [ inputValue, setInputValue] = useState('');

  const inputRef = useRef(null);

  const navigate = useNavigate();

  const pass = 'Charles Wiwi' // atau bisa 'charles wiwi'

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  }

  const buttonHandler = () => {
    if (inputValue === pass || inputValue === pass.toLowerCase()) {
      navigate('./convo');
    } else {
      setIsWrong(true);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }

  return (
    <div className='login'>
      <div>
        <img className='panda-img' src={Panda} />
      </div>
      <div className='input-box'>
        <input type='text' placeholder='Input Password' onChange={inputHandler} ref={inputRef}/>
        <button onClick={buttonHandler}>RUN</button>
      </div>
      {isWrong && (
        <div>
          <p className='wrong-input'>It's Wiwi's full name! Try again!</p>
        </div>
      )}
      <div className='bottom-img'>
        <img className='bird-img' src={Bird} />
        <img className='bubble-chat' src={BubbleChat} />
        <p>Perhaps, <br /> my full name?</p>
      </div>
    </div>
  )
}

export default Login