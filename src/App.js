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
                <Route excat path='/Signup' element={<Signup />} />
                <Route excat path='/Homepage' element={<Homepage />} />
                <Route excat path='/Home' element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
