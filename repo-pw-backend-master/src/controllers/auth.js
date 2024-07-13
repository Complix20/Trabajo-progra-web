import Usuario from '../models/usuarios.js'; // Asegúrate de ajustar la ruta y nombre del archivo según tu estructura
import Rol from '../models/roles.js'; // Asegúrate de ajustar la ruta y nombre del archivo según tu estructura

const login = async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const user = await Usuario.findOne({ where: { usuario, password } });
        if (!user) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });
        }
        return res.status(200).json({ message: 'Login exitoso.', user });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return res.status(500).json({ message: 'Error al iniciar sesión.' });
    }
};

export default { login };
