import React from 'react'
import { useNavigate } from 'react-router-dom';

// import css
import './DontWant.css'

// import image
import Animal from '../assets/DontWant.png'

// import data 
import dataFinal from './Data.js'

// import
import saveDataToDatabase from './api.js';

const DontWant = () => {
    const navigate = useNavigate();

    const nahHandler = () => {
        dataFinal.push("Nah")
        navigate('../thankyou')
        saveDataToDatabase(dataFinal)
        .then((response) => {
            console.log(response); // Output: Data saved successfully
        })
        .catch((error) => {
            console.error(error);
        });
    }

  return (
    <div className='dont-want'>
        <p>U sure u don't want to?</p>
        <img src={Animal} />
        <div className='button'>
            <div className='button1' onClick={() => navigate('../convo')}>
                <p>uhh missclicked</p>
                <div className="outline"></div>
            </div>
            <div className='button2' onClick={nahHandler}>
                <p>yeah...</p>
                <div className="outline"></div>
            </div>
        </div>
    </div>
  )
}

export default DontWant