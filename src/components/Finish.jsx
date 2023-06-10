import React, { useEffect } from 'react'

// import css
import './Finish.css'

// import image
import Fox from '../assets/THX.png'
import BubbleChat from '../assets/16s.png'

// import data 
import dataFinal from './Data.js'

const Finish = () => {
  const obj = Object.create(null)
  const data = Object.assign(obj, dataFinal)

  console.log(data)

  return (
    <div className='finish'>
      <div className='finish-chat'>
        <img src={BubbleChat} />
        <p>AIGHT. <br /> THANKUUU ^^</p>
      </div>
      <img className='finish-fox' src={Fox} />
    </div>
  )
}

export default Finish;