// models/ClienteDireccion.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Cliente from './clientes.js';

const ClienteDireccion = sequelize.define('ClienteDireccion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idCliente: {
    type: DataTypes.INTEGER,
    references: {
      model: Cliente,
      key: 'id'
    }
  },
  linea1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  linea2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  distrito: {
    type: DataTypes.STRING,
    allowNull: false
  },
  provincia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'cliente_direcciones',
  timestamps: false
});

Cliente.hasMany(ClienteDireccion, { foreignKey: 'idCliente', as: 'direcciones' });
ClienteDireccion.belongsTo(Cliente, { foreignKey: 'idCliente', as: 'cliente' });

export default ClienteDireccion;
