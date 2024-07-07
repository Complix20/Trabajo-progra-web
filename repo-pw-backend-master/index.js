import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import usuariosRouter from './src/routes/usuarios.js';
import rolesRouter from './src/routes/roles.js';
import productosRouter from './src/routes/productos.js';
import ordenesRouter from './src/routes/ordenes.js';
import detalleOrdenesRouter from './src/routes/detalleOrdenes.js';
import clientesDireccionesRouter from './src/routes/clientesDirecciones.js';
import clientesRouter from './src/routes/clientes.js';
import carritoDeComprasRouter from './src/routes/carritoDeCompras.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ message: "Hello World", code: "201"});
})

app.use('/usuarios', usuariosRouter);
app.use('/roles', rolesRouter);
app.use('/productos', productosRouter);
app.use('/ordenes', ordenesRouter);
app.use('/detalleOrdenes', detalleOrdenesRouter);
app.use('/clientesDirecciones', clientesDireccionesRouter);
app.use('/clientes', clientesRouter);
app.use('/carritoDeCompras', carritoDeComprasRouter);

app.listen(3001,() => {
    console.log('Server is running on port 3001')
})