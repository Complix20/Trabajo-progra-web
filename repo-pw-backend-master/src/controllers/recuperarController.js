import Usuario from '../models/usuarios.js';
import nodemailer from 'nodemailer';

const recuperar = async (req, res) => {
    const { correo } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { usuario: correo } });
        if (!usuario) {
            return res.status(404).json({ message: 'Correo no encontrado.' });
        }

        // Configuración del transportador de nodemailer
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'pieropizarrobasile@gmail.com', // tu correo
                pass: 'golm pcly esip utpn' // tu contraseña
            }
        });

        // Configuración del correo
        let mailOptions = {
            from: 'pieropizarrobasile@gmail.com',
            to: correo,
            subject: 'Recuperación de Contraseña',
            text: 'Haz clic en el siguiente enlace para restablecer tu contraseña: http://localhost:3001/reset-password?token=tu-token' // Ajusta esto
        };

        // Enviar el correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo:', error);
                return res.status(500).json({ message: 'Error al enviar el correo.' });
            } else {
                console.log('Correo enviado:', info.response);
                res.status(200).json({ message: 'Correo enviado. Por favor revisa tu bandeja de entrada.' });
            }
        });
    } catch (error) {
        console.error('Error al recuperar contraseña:', error);
        res.status(500).json({ message: 'Error al recuperar contraseña.' });
    }
};

export default { recuperar };