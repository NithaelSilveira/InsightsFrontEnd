import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import '../styles/HomePage.css'

function HomePage() {
    return (
        <div className="home-page">
            <Header />
            <div className="main-layout">
                <Sidebar />
                <main className="main-content">
                    <div className="content-area">
                        <h2>Bem-vindo ao Dashboard</h2>
                        <p>Selecione uma opção no menu lateral para começar.</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default HomePage
