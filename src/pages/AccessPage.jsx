import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/AccessPage.css'

function AccessPage() {
    const navigate = useNavigate()

    const handleStartTest = () => {
        navigate('/home')
    }

    return (
        <div className="access-page">
            <div className="access-container">
                <h1>Bem-vindo ao Insights</h1>
                <p>Clique no botão abaixo para iniciar o teste</p>
                <button
                    className="start-button"
                    onClick={handleStartTest}
                >
                    Iniciar Teste
                </button>
            </div>
        </div>
    )
}

export default AccessPage
