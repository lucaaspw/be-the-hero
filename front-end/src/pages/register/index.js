import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'
import './style.css';
import imgLogo from '../../assets/logo.svg'
export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();
    async function HendelRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try {
            const response = await api.post('ongs', data);
            alert(`Olá ${data.name} seu código de acesso é: ${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert('ALgum erro no preenchimento dos campos, tente novamente');
        }

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={imgLogo} alt="Be The Hero" />
                    <h1>Cadatro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="links">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={HendelRegister}>
                    <input type="text"
                        placeholder="Seu nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email"
                        placeholder="Seu e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input type="tel"
                        placeholder="Seu whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input type="text"
                            placeholder="Sua cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input type="text"
                            placeholder="UF"
                            style={{ width: 70 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
