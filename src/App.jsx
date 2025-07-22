import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function App() {
    const location = useLocation();

    return (
        <>

            <Navbar />
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Login />} />
                    <Route path='/createaccount' element={<CreateAccount />} />
                </Routes>
            </AnimatePresence>

        </>
    )
}
