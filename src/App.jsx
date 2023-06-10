import React from "react";
// import react router dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import components
import Login from  './components/Login';
import Convo from  './components/Convo';
import Date from  './components/Date';
import Finish from  './components/Finish';
import DontWant from "./components/DontWant";
// import css
import './App.css'


const App = () => {
    return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/convo' element={<Convo />} />
                <Route path='/perhapsrethink' element={<DontWant />}/>
                <Route path='/agenda' element={<Date />} />
                <Route path='/thankyou' element={<Finish />} />
            </Routes>
        </Router>
    </div>
    
    )
}

export default App;