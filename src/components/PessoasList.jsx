import React, { useState, useEffect } from 'react'

function PessoasList() {
    const [pessoas, setPessoas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const buscarPessoas = async () => {
            try {
                console.log('Dados recebidos da API:', "passou aqui")
                const resposta = await fetch('http://localhost:5246/pessoas/')
                const dados = await resposta.json()
                console.log('Dados recebidos da API:', dados)
                setPessoas(dados)
            } catch (erro) {
                console.error('Erro ao buscar pessoas:', erro)
            } finally {
                setLoading(false)
            }
        }

        buscarPessoas()
    }, [])

    if (loading) {
        return <div>Carregando pessoas...</div>
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Pessoas </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {pessoas.map((pessoa) => (
                    <div key={pessoa.id} style={{ 
                        border: '1px solid #ddd', 
                        borderRadius: '8px', 
                        padding: '20px',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h3>{pessoa.nome}</h3>
                        <p><strong>ID:</strong> {pessoa.id}</p>
                        {!!pessoa.endereco && <p><strong>Endereço:</strong> {pessoa.endereco}</p>}
                        {!!pessoa.telefone && <p><strong>Telefone:</strong> {pessoa.telefone}</p>}
                        <div style={{ marginTop: '10px' }}>
                            {pessoa.cliente && <span style={{ 
                                backgroundColor: '#e3f2fd', 
                                color: '#1976d2', 
                                padding: '4px 8px', 
                                borderRadius: '4px', 
                                marginRight: '5px',
                                fontSize: '12px'
                            }}>Cliente</span>}
                            {!!pessoa.fornecedor && <span style={{ 
                                backgroundColor: '#f3e5f5', 
                                color: '#7b1fa2', 
                                padding: '4px 8px', 
                                borderRadius: '4px',
                                fontSize: '12px'
                            }}>Fornecedor</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PessoasList