import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/User.jsx';
import './Login.css';
import TopBar from '../componentsTopBar/TopBar.jsx';
import Footer from '../componentsFooter/Footer.jsx';
import AuthAPI from '../../api/auth'; // Asegúrate de ajustar la ruta según sea necesario

const Login = () => {
    const navigate = useNavigate();
    const user = useUser();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = async () => {
        try {
            const response = await AuthAPI.login({ usuario, password });
            if (response.message === 'Login exitoso.') {
                const userData = { usuario, password };
                localStorage.setItem('user', JSON.stringify(userData));
                user.setUser(userData);
                navigate('/');
            } else {
                setError(response.message || 'Error al iniciar sesión.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error); // Agregar un log para errores
            setError(error.message || 'Error al iniciar sesión.');
        }
    };

    return (
        <>
            <TopBar/>
            <div className="login">
                <main id="mainLogin" className="mainLogin">
                    <h1>Ingreso para clientes registrados</h1>
                    <input
                        type="text"
                        id="Usuario"
                        placeholder="email"
                        value={usuario}
                        onChange={(event) => setUsuario(event.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br />
                    <span className="errorMessage">{error}</span>
                    <br />
                    <button onClick={handleClick}>Ingresar</button>
                    <div id='olvide-contraseña'>
                        { user?.usuario ? <UsuarioLogueado username={user.usuario} onClick={handleCerrarSesion} /> : <a><Link to='/recuperar-contraseña'>Olvidé mi contraseña</Link></a> }
                    </div>
                    <div id='no-tengo-cuenta'>
                        { user?.usuario ? <UsuarioLogueado username={user.usuario} onClick={handleCerrarSesion} /> : <a><Link to='/signup'>No tengo cuenta, deseo registrarme</Link></a> }
                    </div>
                </main>
            </div>     
            <Footer/>
        </>   
    );
};

export default Login;
