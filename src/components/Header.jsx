import React from 'react'
import '../styles/Header.css'

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="header-title">Insights Dashboard</h1>
                <nav className="header-nav">
                    <span className="user-info">Usuário</span>
                </nav>
            </div>
        </header>
    )
}

export default Header
