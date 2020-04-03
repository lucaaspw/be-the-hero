import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';
import imgLogo from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile() {
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);
  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incidents => incidents.id !== id));
    } catch (error) {
      alert('Erro ao tentar deletar este conteúdo, tente novamente');
    }
  }
  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }
  return (
    <div className="profile-container">
      <header>
        <img src={imgLogo} alt="Be The Hero" />
        <span>Bem Vindo(a), {ongName}</span>
        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02040" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incidents => (
          <li key={incidents.id}>
            <strong>Caso:</strong>
            <p>{incidents.title}</p>
            <strong>Descrição:</strong>
            <p>{incidents.description}</p>
            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incidents.value)}</p>

            <button onClick={() => handleDeleteIncident(incidents.id)} type="submit">
              <FiTrash2 size={18} color={'#a8a8b3'} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
