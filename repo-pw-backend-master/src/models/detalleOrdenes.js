// models/DetalleOrden.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Orden from './ordenes.js';
import Producto from './productos.js';

const DetalleOrden = sequelize.define('DetalleOrden', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idOrden: {
    type: DataTypes.INTEGER,
    references: {
      model: Orden,
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
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subTotal: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
}, {
  tableName: 'detalle_ordenes',
  timestamps: false
});

Orden.hasMany(DetalleOrden, { foreignKey: 'idOrden', as: 'detalles' });
DetalleOrden.belongsTo(Orden, { foreignKey: 'idOrden', as: 'orden' });

Producto.hasMany(DetalleOrden, { foreignKey: 'idProducto', as: 'detalles' });
DetalleOrden.belongsTo(Producto, { foreignKey: 'idProducto', as: 'producto' });

export default DetalleOrden;
