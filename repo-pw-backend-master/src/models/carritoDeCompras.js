// models/CarritoDeCompras.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Cliente from './clientes.js';
import Producto from './productos.js';

const CarritoDeCompras = sequelize.define('CarritoDeCompras', {
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
  idProducto: {
    type: DataTypes.INTEGER,
    references: {
      model: Producto,
      key: 'id'
    }
  },
  esParaDespues: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'carrito_de_compras',
  timestamps: false
});

Cliente.hasMany(CarritoDeCompras, { foreignKey: 'idCliente', as: 'carritos' });
CarritoDeCompras.belongsTo(Cliente, { foreignKey: 'idCliente', as: 'cliente' });

Producto.hasMany(CarritoDeCompras, { foreignKey: 'idProducto', as: 'carritos' });
CarritoDeCompras.belongsTo(Producto, { foreignKey: 'idProducto', as: 'producto' });

export default CarritoDeCompras;
