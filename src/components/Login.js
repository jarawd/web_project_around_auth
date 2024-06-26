import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Login({ handleLogin }) {
  const { menu, setMenu, setLoggedIn } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (menu.length === 0 || menu[0].route !== '/signup') {
      setMenu([{ route: '/signup', title: 'Regístrate' }]);
    }
  }, [menu, setMenu]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    handleLogin(email, password);
    setLoggedIn(true);
    navigate('/');
  }

  return (
    <div className="login">
      <h2 className="login__title">Inicia Sesión</h2>
      <form className="login__form">
        <input
          className="login__form-item"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login__form-item"
          name="password"
          type="password"
          placeholder="Contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="login__button"
          onClick={(e) => handleSubmit(e)}
        >
          Inicia Sesión
        </button>
      </form>
      <Link
        className="login__register"
        to="/signup"
      >
        ¿Aún no eres miembro? Regístrate aquí
      </Link>
    </div>
  );
}