import Usuario from '../models/usuarios.js';
import Cliente from '../models/clientes.js';

const signup = async (req, res) => {
    const { nombre, apellido, correo, password } = req.body;

    try {
        const usuario = await Usuario.create({ usuario: correo, password, idRol: 2 });
        const cliente = await Cliente.create({ nombre, apellido, correo, idUsuario: usuario.id, fechaRegistro: new Date(), estado: 'Activo' });

        res.status(201).json({ message: 'Usuario registrado exitosamente.', usuario, cliente });
    } catch (error) {
        console.error('Error al registrar usuario y cliente:', error);
        res.status(500).json({ message: 'Error al registrar usuario y cliente.' });
    }
};

export default { signup };
