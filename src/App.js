import React from 'react';
import Home from './Components/Home';
import Homepage from './Components/Homepage';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import { Routes, Route } from 'react-router-dom';


function App() {
    return (
        <>
           
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/homepage' element={<Homepage />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </>
    );
}

export default App;
