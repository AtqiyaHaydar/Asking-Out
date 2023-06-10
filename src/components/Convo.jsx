import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// import css
import './Convo.css'

// import image
import Board from '../assets/4s.png'
import Fox from '../assets/3s.png'
import Panda from '../assets/5s.png'
import Bubble from '../assets/17s.png'
import Bubble2 from '../assets/18s.png'
import Sure from '../assets/20s.png'
import Nah from '../assets/21s.png'

// import data 
import dataFinal from './Data.js'

const Convo = () => {
  // RECEIVING DATA
  const dataConvo = []; // sure/nah, may/june, tanggal(dalam index)

  // use state
  const [isSure, setIsSure] = useState(false);

  // fungsi untuk mengganti background tombol bulan
  const [isClickedMay, setIsClickedMay] = useState(true);
  const [isClickedJune, setIsClickedJune] = useState(false);

  // ketika tombol sure di klik
  const sureHandler = () => {
    setIsSure(true);
    dataConvo.push('sure')
  }
  
  // use state untuk 4 tanggal di bulan berbeda
  const [date1, setDate1] = useState('28th')
  const [date2, setDate2] = useState('29th')
  const [date3, setDate3] = useState('30th')
  const [date4, setDate4] = useState('31st')

  // fungsi ketika mengeklik tombol juni
  const juneHandler = () => {
    setDate1('1st')
    setDate2('2nd')
    setDate3('3rd')
    setDate4('4th')
    setIsClickedJune(true);
    setIsClickedMay(false);
  }

  // fungsi ketika mengeklik tombol mei
  const mayHandler = () => {
    setDate1('28th')
    setDate2('29th')
    setDate3('30th')
    setDate4('31st')
    setIsClickedJune(false);
    setIsClickedMay(true);
  }

  // use navigate
  const navigate = useNavigate();

  // use state 4 button
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  // fungsi 4 button
  const button1Handler = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  }

  const button2Handler = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
  }

  const button3Handler = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
  }

  const button4Handler = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
  }

  // typing animation
  let text1 = 'W - Would you like to..'
  let text2 = 'GGo out on a a  date with me?'
  let text3 = "  Sure, let's plan it out!"

  const index1 = useRef(0);
  const index2 = useRef(0);
  const index3 = useRef(0);

  const [currentText1, setCurrentText1] = useState('');
  const [currentText2, setCurrentText2] = useState('');
  const [currentText3, setCurrentText3] = useState('');

  useEffect(() => {
    index1.current = 0;
    setCurrentText1('');
  }, [text1])

  useEffect(() => {
    index2.current = 0;
    setCurrentText2('');
  }, [text2])

  useEffect(() => {
    setTimeout(() => {
      setCurrentText1((value) => value + text1.charAt(index1.current));
      index1.current += 1
    }, 20)
  }, [currentText1, text1])

  useEffect(() => {
    setTimeout(() => {
      setCurrentText2((value) => value + text2.charAt(index2.current));
      index2.current += 1
    }, 45)
  }, [currentText2, text2])

  // fungsi tombol akhir
  const finishHandler = () => {
    navigate('../agenda')

    dataConvo.push("Sure")

    if (isClickedMay) {
      dataConvo.push("May")

      if (active1) {
        dataConvo.push("28th")
      } else if (active2) {
        dataConvo.push("29th")
      } else if (active3) {
        dataConvo.push("30th")
      } else if (active4) {
        dataConvo.push("31st")
      }

    } else if (isClickedJune) {
      dataConvo.push("June")

      if (active1) {
        dataConvo.push("1st")
      } else if (active2) {
        dataConvo.push("2nd")
      } else if (active3) {
        dataConvo.push("3rd")
      } else if (active4) {
        dataConvo.push("4th")
      }
    }

    dataFinal.push(dataConvo)
  }

  return (
    <div className='convo'>
      <div className={`header-text ${isSure ? 'transformer4' : ''}`}>
        <h1>Hi,</h1>
        <p>you're breathtaking</p>
      </div>
      <div className={`board ${isSure ? 'transformer' : ''}`}>
        <img src={Board}/>
        <div className='convo-bubble'>
          <div>
            <img className='character chara1'src={Fox} />
            <img className='bubble-chat bb1' src={Bubble} />
            <p className='text1'>{currentText1}</p>
          </div>
          <div>
            <img className='character chara2' src={Fox} />
            <img className='bubble-chat bb2' src={Bubble} />
            <p className='text2'>{currentText2}</p>
          </div>
          {isSure && (
          <div>
            <img className='character chara3' src={Panda} />
            <img className='bubble-chat bb3' src={Bubble2} />
            <p className='text3'>{text3}</p>
          </div>
          )}
        </div>
      </div>
      {!isSure && (
        <div className='convo-button'>
          <img className='sure-button' src={Sure} onClick={sureHandler}/>
          <img className='nah-button' src={Nah} onClick={() => navigate('../perhapsrethink')}/>
        </div>
      )}

    {/* DECISION BOX */}
    {isSure && (
      <div className='decision-box transformer2'>
        <div>
          <div className={`button-month may ${isClickedMay? 'selected' : 'not-selected'}`} onClick={mayHandler}>May</div>
          <div className={`button-month june ${isClickedJune? 'selected' : 'not-selected'}`} onClick={juneHandler}>June</div>
        </div>
        <div className='white-box'>
          <div className='date'>
            <button className={`${active1? 'active' : ''}`} onClick={button1Handler}>{date1}</button>
            <button className={`${active2? 'active' : ''}`} onClick={button2Handler}>{date2}</button>
            <button className={`${active3? 'active' : ''}`} onClick={button3Handler}>{date3}</button>
            <button className={`${active4? 'active' : ''}`} onClick={button4Handler}>{date4}</button>
          </div>
        </div>
      </div>
    )}

    {/* FINAL BUTTON */}
    {isSure && (
      <div className='final-message' onClick={finishHandler}>
        <p>I think this would be the perfect date</p>
      </div>
    )}
    </div>
  )
}

export default Convo