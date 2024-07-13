// models/Orden.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Cliente from './clientes.js';

const Orden = sequelize.define('Orden', {
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
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipoPago: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipoEnvio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subTotal: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  impuestos: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
}, {
  tableName: 'ordenes',
  timestamps: false
});

Cliente.hasMany(Orden, { foreignKey: 'idCliente', as: 'ordenes' });
Orden.belongsTo(Cliente, { foreignKey: 'idCliente', as: 'cliente' });

export default Orden;

