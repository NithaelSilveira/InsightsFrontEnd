import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AccessPage from './pages/AccessPage'
import HomePage from './pages/HomePage'
import './styles/App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<AccessPage />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
