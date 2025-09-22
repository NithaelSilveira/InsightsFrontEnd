import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import PessoasList from '../components/PessoasList'
import '../styles/HomePage.css'

function HomePage() {
    const [conteudoAtual, setConteudoAtual] = useState('')

    const handleMudarConteudo = (novoConteudo) => {
        setConteudoAtual(novoConteudo)
    }

    const renderizarConteudo = () => {
        switch (conteudoAtual) {
            case 'pessoas':
                return <PessoasList />
            case 'produtos':
                return <div style={{ padding: '20px' }}><h2>Produtos</h2><p>Funcionalidade de produtos em desenvolvimento...</p></div>
            case 'categorias':
                return <div style={{ padding: '20px' }}><h2>Categorias</h2><p>Funcionalidade de categorias em desenvolvimento...</p></div>
            default:
                return (
                    <div className="content-area">
                        <h2>Bem-vindo ao Dashboard</h2>
                        <p>Selecione uma opção no menu lateral para começar.</p>
                    </div>
                )
        }
    }

    return (
        <div className="home-page">
            <Header />
            <div className="main-layout">
                <Sidebar onMudarConteudo={handleMudarConteudo} conteudoAtual={conteudoAtual} />
                <main className="main-content">
                    {renderizarConteudo()}
                </main>
            </div>
        </div>
    )
}

export default HomePage
