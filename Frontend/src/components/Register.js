import { useNavigate, Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Register({ handleRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { menu, setMenu, setIsRegisterPopupOpen, setStateRegister } =
    useContext(CurrentUserContext);

  useEffect(() => {
    if (menu.length === 0 || menu[0].route !== '/signin') {
      setMenu([{ route: '/signin', title: 'Iniciar Sesión' }]);
    }
  }, [menu, setMenu]);

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      handleRegister(email, password).then((res) => {
        if (res) {
          setStateRegister(true);
          setIsRegisterPopupOpen(true);
          navigate('/signin');
        } else {
          setStateRegister(false);
          setIsRegisterPopupOpen(true);
          navigate('/signup');
        }
      });
    } else {
      setStateRegister(false);
      setIsRegisterPopupOpen(true);
    }
  }
  return (
    <div className="register">
      <h2 className="register__title">Regístrate</h2>
      <form className="register__form">
        <input
          className="register__form-item"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="register__form-item"
          name="password"
          type="password"
          placeholder="Contraseña"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="register__button"
          onClick={(e) => handleSubmit(e)}
        >
          Regístrate
        </button>
      </form>
      <Link
        className="register__login"
        to="/signin"
      >
        ¿Ya eres miembro? Inicia sesión aquí
      </Link>
    </div>
  );
}
