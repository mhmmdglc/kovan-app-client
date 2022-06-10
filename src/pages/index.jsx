import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from './home'
import LoginPage from './login'
import Header from '../components/header'

const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    )
}

export default Pages