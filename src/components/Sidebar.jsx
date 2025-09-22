import React, { useState } from 'react'
import '../styles/Sidebar.css'

function Sidebar({ onMudarConteudo, conteudoAtual }) {
    const [selectedItem, setSelectedItem] = useState('')

    const menuItems = [
        { id: 'pessoas', label: 'Pessoas', icon: '👥' },
        { id: 'produtos', label: 'Produtos', icon: '📦' },
        { id: 'categorias', label: 'Categorias', icon: '🏷️' }
    ]

    const handleMenuClick = (itemId) => {
        setSelectedItem(itemId)
        onMudarConteudo(itemId)
        console.log(`Clicou em: ${itemId}`)
    }

    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <nav className="sidebar-nav">
                    <ul className="menu-list">
                        {menuItems.map((item) => (
                            <li key={item.id} className="menu-item">
                                <button
                                    className={`menu-button ${selectedItem === item.id ? 'active' : ''}`}
                                    onClick={() => handleMenuClick(item.id)}
                                >
                                    <span className="menu-icon">{item.icon}</span>
                                    <span className="menu-label">{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar
