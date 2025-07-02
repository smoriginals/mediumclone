import React from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
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
                    <Route path='/' element={<Form />} />
                    <Route path='/createaccount' element={<CreateAccount />} />
                </Routes>
            </AnimatePresence>

        </>
    )
}
