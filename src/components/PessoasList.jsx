import React, { useState, useEffect } from 'react'

function PessoasList() {
    const [pessoas, setPessoas] = useState([])
    const [loading, setLoading] = useState(true)
    const [filtroNome, setFiltroNome] = useState('')
    const [filtroCliente, setFiltroCliente] = useState(false)
    const [filtroFornecedor, setFiltroFornecedor] = useState(false)

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

    const pessoasFiltradas = pessoas.filter(pessoa =>{
        const nomeMatch = pessoa.nome.toLowerCase().includes(filtroNome.toLowerCase())
        const clienteMatch = !filtroCliente || pessoa.cliente
        const fornecedorMatch = !filtroFornecedor || pessoa.fornecedor

        return nomeMatch && clienteMatch && fornecedorMatch
    })

    if (loading) {
        return <div>Carregando pessoas...</div>
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ 
                fontSize: '32px', 
                fontWeight: '700', 
                color: '#764ba2', 
                marginBottom: '25px',
                textAlign: 'left',
                textShadow: '0 2px 4px rgba(118, 75, 162, 0.3)',
                letterSpacing: '1px'
            }}>
                Pessoas
            </h1>
            <div style={{
                marginBottom: '20px',
                padding: '20px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                border: '1px solid #e9ecef',
            }}>
                <div style={{ marginBottom: '15px'}}>
                    <input
                        type="text"
                        placeholder="Pesquisar por nome..."
                        value={filtroNome}
                        onChange={(e) => setFiltroNome(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px'
                        }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <input
                    type="checkbox"
                    checked={filtroCliente}
                    onChange={(e) => setFiltroCliente(e.target.checked)}
                    />
                    Clientes
                </label>
                
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <input
                        type="checkbox"
                        checked={filtroFornecedor}
                        onChange={(e) => setFiltroFornecedor(e.target.checked)}
                    />
                    Fornecedores
                </label>
            </div>
            </div>
           
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {pessoasFiltradas.map((pessoa) => (
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