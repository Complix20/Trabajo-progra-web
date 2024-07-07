// src/Componentes/UsuariosRegistrados.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/UsuariosRegistrados.css';
import SearchBox from './SearchBox';

function Usuarios({ usuarios, onDesactivarUsuario }) {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const itemsPerPage = 4; // Limitar a 4 usuarios por página
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredUsers(usuarios);
  }, [usuarios]);

  const handleSearch = (query) => {
    const filtered = usuarios.filter((user) =>
      String(user.id).toLowerCase().includes(query.toLowerCase()) ||
      String(user.serie).toLowerCase().includes(query.toLowerCase()) ||
      user.nombre.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered Users: ", filtered); // Agrega este console.log para verificar
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    onDesactivarUsuario(id);
  };

  const handleView = (user) => {
    navigate(`/admin-app/ver-usuario/${user.id}`, { state: { user } });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="productos-container">
      <div className="Cabecita1">
        <div>Usuarios Registrados</div>
        <div className="agregacion-prod">
        </div>
      </div>
      <div className='bu'>
      <SearchBox onSearch={handleSearch} />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Fecha de Registro</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.correo}</td>
              <td>{user.FechaRegistro}</td>
              <td>{user.Estado}</td>
              <td>
                <button onClick={() => handleView(user)}>Ver</button>
                <button onClick={() => handleUpdate(user)}>Actualizar</button>
                <button onClick={() => handleDelete(user.id)}>Desactivar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>{currentPage}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentItems.length < itemsPerPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Usuarios;
