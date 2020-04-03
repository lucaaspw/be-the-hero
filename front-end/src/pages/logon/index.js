import React, {useState} from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';
import './style.css';
import imgHeroes from '../../assets/heroes.png';
import imgLogo from '../../assets/logo.svg';
import api from '../../services/api';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();
  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('profile');
    } catch (error) {
      alert('Falha ao logar, tente novamente');
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={imgLogo} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
        <h1>Faça seu Logon</h1>
          <input type="text"
            placeholder="Seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">Entrar</button>
          <Link to="/register" className="links">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro</Link>
        </form>

      </section>
      <img src={imgHeroes} alt="Heroes" />
    </div>
  )
}
