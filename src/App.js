import React, { useState, useEffect } from 'react';
import { FaGasPump, FaPlus, FaTrash, FaChartLine, FaCar, FaCalendarAlt } from 'react-icons/fa';
import './App.css';

function App() {
  const [abastecimentos, setAbastecimentos] = useState([]);
  const [formData, setFormData] = useState({
    data: '',
    tipoCombustivel: 'gasolina',
    quantidade: '',
    precoLitro: '',
    odometro: '',
    placa: '',
    observacoes: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Carregar dados do localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('abastecimentos');
    if (savedData) {
      setAbastecimentos(JSON.parse(savedData));
    }
  }, []);

  // Salvar dados no localStorage
  useEffect(() => {
    localStorage.setItem('abastecimentos', JSON.stringify(abastecimentos));
  }, [abastecimentos]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editIndex !== null) {
      // Editar abastecimento existente
      const updatedAbastecimentos = [...abastecimentos];
      updatedAbastecimentos[editIndex] = {
        ...formData,
        id: Date.now(),
        total: parseFloat(formData.quantidade) * parseFloat(formData.precoLitro)
      };
      setAbastecimentos(updatedAbastecimentos);
      setEditIndex(null);
    } else {
      // Adicionar novo abastecimento
      const novoAbastecimento = {
        ...formData,
        id: Date.now(),
        total: parseFloat(formData.quantidade) * parseFloat(formData.precoLitro)
      };
      setAbastecimentos(prev => [novoAbastecimento, ...prev]);
    }

    // Limpar formulário
    setFormData({
      data: '',
      tipoCombustivel: 'gasolina',
      quantidade: '',
      precoLitro: '',
      odometro: '',
      placa: '',
      observacoes: ''
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    const abastecimento = abastecimentos[index];
    setFormData({
      data: abastecimento.data,
      tipoCombustivel: abastecimento.tipoCombustivel,
      quantidade: abastecimento.quantidade,
      precoLitro: abastecimento.precoLitro,
      odometro: abastecimento.odometro,
      placa: abastecimento.placa,
      observacoes: abastecimento.observacoes
    });
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    if (window.confirm('Tem certeza que deseja excluir este abastecimento?')) {
      const updatedAbastecimentos = abastecimentos.filter((_, i) => i !== index);
      setAbastecimentos(updatedAbastecimentos);
    }
  };

  const calcularEstatisticas = () => {
    if (abastecimentos.length === 0) return { totalGasto: 0, totalLitros: 0, mediaPreco: 0 };

    const totalGasto = abastecimentos.reduce((sum, item) => sum + item.total, 0);
    const totalLitros = abastecimentos.reduce((sum, item) => sum + parseFloat(item.quantidade), 0);
    const mediaPreco = totalGasto / totalLitros;

    return { totalGasto, totalLitros, mediaPreco };
  };

  const stats = calcularEstatisticas();

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <FaGasPump className="header-icon" />
          <h1>Controle de Combustível</h1>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {/* Estatísticas */}
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat-card">
                <FaChartLine className="stat-icon" />
                <div className="stat-content">
                  <h3>Total Gasto</h3>
                  <p>R$ {stats.totalGasto.toFixed(2)}</p>
                </div>
              </div>
              <div className="stat-card">
                <FaGasPump className="stat-icon" />
                <div className="stat-content">
                  <h3>Total Litros</h3>
                  <p>{stats.totalLitros.toFixed(2)} L</p>
                </div>
              </div>
              <div className="stat-card">
                <FaChartLine className="stat-icon" />
                <div className="stat-content">
                  <h3>Preço Médio</h3>
                  <p>R$ {stats.mediaPreco.toFixed(2)}/L</p>
                </div>
              </div>
            </div>
          </section>

          {/* Botão Adicionar */}
          <section className="add-section">
            <button 
              className="add-button"
              onClick={() => setShowForm(!showForm)}
            >
              <FaPlus />
              {showForm ? 'Cancelar' : 'Adicionar Abastecimento'}
            </button>
          </section>

          {/* Formulário */}
          {showForm && (
            <section className="form-section">
              <form onSubmit={handleSubmit} className="form">
                <h2>{editIndex !== null ? 'Editar' : 'Novo'} Abastecimento</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="data">Data</label>
                    <input
                      type="date"
                      id="data"
                      name="data"
                      value={formData.data}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tipoCombustivel">Tipo de Combustível</label>
                    <select
                      id="tipoCombustivel"
                      name="tipoCombustivel"
                      value={formData.tipoCombustivel}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="gasolina">Gasolina</option>
                      <option value="etanol">Etanol</option>
                      <option value="diesel">Diesel</option>
                      <option value="flex">Flex</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="quantidade">Quantidade (L)</label>
                    <input
                      type="number"
                      id="quantidade"
                      name="quantidade"
                      value={formData.quantidade}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="precoLitro">Preço por Litro (R$)</label>
                    <input
                      type="number"
                      id="precoLitro"
                      name="precoLitro"
                      value={formData.precoLitro}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="odometro">Odômetro (km)</label>
                    <input
                      type="number"
                      id="odometro"
                      name="odometro"
                      value={formData.odometro}
                      onChange={handleInputChange}
                      min="0"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="placa">Placa do Veículo</label>
                    <input
                      type="text"
                      id="placa"
                      name="placa"
                      value={formData.placa}
                      onChange={handleInputChange}
                      placeholder="ABC-1234"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="observacoes">Observações</label>
                  <textarea
                    id="observacoes"
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Observações adicionais..."
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-button">
                    {editIndex !== null ? 'Atualizar' : 'Salvar'}
                  </button>
                  <button 
                    type="button" 
                    className="cancel-button"
                    onClick={() => {
                      setShowForm(false);
                      setEditIndex(null);
                      setFormData({
                        data: '',
                        tipoCombustivel: 'gasolina',
                        quantidade: '',
                        precoLitro: '',
                        odometro: '',
                        placa: '',
                        observacoes: ''
                      });
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </section>
          )}

          {/* Lista de Abastecimentos */}
          <section className="list-section">
            <h2>Histórico de Abastecimentos</h2>
            {abastecimentos.length === 0 ? (
              <div className="empty-state">
                <FaGasPump className="empty-icon" />
                <p>Nenhum abastecimento registrado ainda.</p>
                <p>Clique em "Adicionar Abastecimento" para começar.</p>
              </div>
            ) : (
              <div className="abastecimentos-list">
                {abastecimentos.map((abastecimento, index) => (
                  <div key={abastecimento.id} className="abastecimento-card">
                    <div className="abastecimento-header">
                      <div className="abastecimento-info">
                        <div className="abastecimento-data">
                          <FaCalendarAlt />
                          <span>{new Date(abastecimento.data).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="abastecimento-tipo">
                          <FaGasPump />
                          <span className={`tipo-badge ${abastecimento.tipoCombustivel}`}>
                            {abastecimento.tipoCombustivel.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="abastecimento-actions">
                        <button 
                          onClick={() => handleEdit(index)}
                          className="edit-button"
                          title="Editar"
                        >
                          ✏️
                        </button>
                        <button 
                          onClick={() => handleDelete(index)}
                          className="delete-button"
                          title="Excluir"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    
                    <div className="abastecimento-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <strong>Quantidade:</strong> {parseFloat(abastecimento.quantidade).toFixed(2)} L
                        </div>
                        <div className="detail-item">
                          <strong>Preço/L:</strong> R$ {parseFloat(abastecimento.precoLitro).toFixed(2)}
                        </div>
                        <div className="detail-item total">
                          <strong>Total:</strong> R$ {abastecimento.total.toFixed(2)}
                        </div>
                      </div>
                      
                      {(abastecimento.odometro || abastecimento.placa) && (
                        <div className="detail-row">
                          {abastecimento.odometro && (
                            <div className="detail-item">
                              <FaCar />
                              <strong>Odômetro:</strong> {parseInt(abastecimento.odometro).toLocaleString()} km
                            </div>
                          )}
                          {abastecimento.placa && (
                            <div className="detail-item">
                              <strong>Placa:</strong> {abastecimento.placa}
                            </div>
                          )}
                        </div>
                      )}
                      
                      {abastecimento.observacoes && (
                        <div className="observacoes">
                          <strong>Observações:</strong> {abastecimento.observacoes}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App; 