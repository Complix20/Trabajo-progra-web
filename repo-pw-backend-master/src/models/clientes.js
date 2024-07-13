// models/Cliente.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './usuarios.js';

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  fechaRegistro: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
}, {
  tableName: 'clientes',
  timestamps: false
});

Usuario.hasOne(Cliente, { foreignKey: 'idUsuario', as: 'cliente' });
Cliente.belongsTo(Usuario, { foreignKey: 'idUsuario', as: 'usuario' });

export default Cliente;
