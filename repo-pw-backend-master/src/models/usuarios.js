// models/Usuario.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Rol from './roles.js';

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idRol: {
    type: DataTypes.INTEGER,
    references: {
      model: Rol,
      key: 'id'
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

Rol.hasMany(Usuario, { foreignKey: 'idRol', as: 'usuarios' });
Usuario.belongsTo(Rol, { foreignKey: 'idRol', as: 'rol' });

export default Usuario;
