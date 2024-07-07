// src/components/componentsMasDetalle/MasDetalle.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import './MasDetalle.css'

const MasDetalle = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('../../../public/Productos.json')
      .then(response => response.json())
      .then(data => {
        const selectedProduct = data.find(item => item.id === parseInt(productId));
        setProduct(selectedProduct);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return (
      <>
        <TopBar/>
          <div>Loading...</div>
        <Footer/>
      </>
    )
  }
  

  return (
    <>
    <TopBar />
    <div className="mas-detalle"> 
      <h2>Detalles del Producto</h2>
      <span className = "cuadrado">
      <div className= "producto-detalle">
        <img className = "imagen" src={product.imagen} alt={product.description} />
        <section className = "Caracteristicas">
        <h3>Nombre del producto: {product.description}</h3>
        <h3>Precio del producto: ${product.price}</h3>
        </section>
      </div>
      </span>
    </div>
    <Footer />
    </>
  );
};

export default MasDetalle;
