import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import css
import './Date.css'

// import
import saveDataToDatabase from './api.js';

// import image
import Fox from '../assets/PickTwo.png'
import Bubble from '../assets/17s.png'
import IceSkating from  '../assets/7s.png'
import Museums from '../assets/8s.png'
import CatCafe from '../assets/10s.png'
import Movies from '../assets/9s.png'
import Done from '../assets/22s.png'

// import checklist mage
import Checklist from '../assets/15s.png'

// import data 
import dataFinal from './Data.js'

const Date = () => {
  const navigate = useNavigate();

  // dunia use state
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [c4, setC4] = useState(false);

  // RECEIVING DATA
  const dataDate = []; // ice skating, museums, cat cafe, movies

  if (c1) {
    dataDate.push("Ice Skating")
  }

  if (c2) {
    dataDate.push("Museums")
  }

  if (c3) {
    dataDate.push("Cat Cafe")
  }

  if (c4) {
    dataDate.push("Movies")
  }

  // const doneHandler = () => {
  //   navigate('../thankyou')
  //   // console.log(dataDate)
  //   dataFinal.push(dataDate)
  //   saveDataToDatabase(dataFinal);
  // }


  const doneHandler = () => {
    navigate('../thankyou');
    dataFinal.push(dataDate)
    saveDataToDatabase(dataFinal)
      .then((response) => {
        console.log(response); // Output: Data saved successfully
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='dates'>
      <div className='chat'>
        <img className='chara' src={Fox} />
        <img className='bubbles'src={Bubble} />
        <p className='text'>Pick two or more! ^^</p>
      </div>
      <div className='dates-option'>
        <img className={`ice-skating ${c1 ? 'opacity' : ''}`} src={IceSkating} onClick={() => setC1(!c1)}/>
        <img className={`museums ${c2 ? 'opacity' : ''}`} src={Museums} onClick={() => setC2(!c2)}/>
        <img className={`cat-cafe ${c3 ? 'opacity' : ''}`} src={CatCafe} onClick={() => setC3(!c3)}/>
        <img className={`movies ${c4 ? 'opacity' : ''}`} src={Movies} onClick={() => setC4(!c4)}/>
      </div>
      <a>
        <img className='date-done-button' src={Done} onClick={doneHandler}/>
      </a>
      <img className={`checklist checklist1 ${c1 ? 'block' : ''}`} src={Checklist} onClick={() => setC1(!c1)}/>
      <img className={`checklist checklist2 ${c2 ? 'block' : ''}`} src={Checklist} onClick={() => setC2(!c2)}/>
      <img className={`checklist checklist3 ${c3 ? 'block' : ''}`} src={Checklist} onClick={() => setC3(!c3)}/>
      <img className={`checklist checklist4 ${c4 ? 'block' : ''}`} src={Checklist} onClick={() => setC4(!c4)}/>
    </div>
  )
}

export default Date