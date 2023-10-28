import React from 'react';
import bgImg from '../landingPage/assets/bgImage.jpg';

function Landing2() {
  const backgroundStyle = {
    backgroundImage: 'url("'+bgImg+'")', // Ruta relativa a la imagen
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Ajusta la altura según tus necesidades
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Agrega un fondo semi-transparente para que el texto sea legible
    padding: '16px', // Ajusta el espaciado según tus necesidades
    borderRadius: '8px', // Ajusta el radio de borde según tus necesidades
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <img src={bgImg} alt="Background" style={{ display: 'none' }} /> {/* Imagen de fondo oculta */}
      <div style={contentStyle}>
        <h1>Bienvenido a mi sitio</h1>
        <p>Este es un sitio de ejemplo con una imagen de fondo.</p>
      </div>
    </div>
  );
}

export default Landing2;
