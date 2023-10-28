import React from 'react';
import { Box, Typography } from '@mui/material';

const containerStyle = {
  position: 'relative',
  marginTop:'80px'
};

const box1Style = {
  backgroundColor: '#002060',
  borderRadius: '15px',
  width: '500px',
  height: '280px',
  position: 'absolute',
  top: '55px',
  left: '150px',
};

const imageBelowLeftBoxStyle = {
    position: 'absolute',
    top: '345px',  
    left: '260px',   // Ajusta la distancia desde la izquierda
    width: '250px',  // Ajusta el ancho de la imagen
    height: '250px', // Ajusta la altura de la imagen
};
  
const box2Style = {
  backgroundColor: '#002060',
  borderRadius: '15px',
  width: '500px',
  height: '280px',
  position: 'absolute',
  top: '330px',
  left: '690px',
};

const imageAboveRightBoxStyle = {
    position: 'absolute',
    top: '70px',
    right: '280px',
    width: '250px', // Ajusta el ancho de la imagen
    height: '250px', // Ajusta la altura de la imagen
};

const textTitleStyle = {
  color: '#ffffff',
  variant: 'h2',
  fontSize: '24px',
  textAlign: 'center',
  marginTop: '18px',
  marginBottom: '5px',
};

const textStyle = {
  color: '#ffffff',
  textAlign: 'center',
  marginTop: '5',
  marginLeft: '18px',
  marginRight: '18px',
};

const imageAboveRight = require('../../assets/bacterias2.png');
const imageBelowLeft = require('../../assets/bacterias1.png');

export default function HomePage() {
  return (
    <div style={containerStyle}>
      <img src={imageAboveRight} alt="Imagen arriba"style={imageAboveRightBoxStyle} />

      <Box style={box1Style}>
        <Typography style={textTitleStyle}>
          Laboratorio de Bio-Controladores y Fitopatología
        </Typography>
        <Typography style={textStyle}>
          El laboratorio de biocontroladores y fitopatología es un espacio de investigación especializado que se enfoca en el estudio de enfermedades de las plantas (fitopatología) y en el desarrollo de estrategias de control biológico para combatir estas enfermedades. Los investigadores analizan las causas y los mecanismos de las enfermedades que afectan a las plantas, bacterias, hongos, etc...
        </Typography>
      </Box>

      <img src={imageBelowLeft} alt="Imagen abajo" style={imageBelowLeftBoxStyle} />

      <Box style={box2Style}>
        <Typography style={textTitleStyle}>
          Descripcion de la Página
        </Typography>
        <Typography style={textStyle}>
          Esta página web especializada en la gestión y conteo de microorganismos es una plataforma integral diseñada para el laboratorio de biocontroladores y fitopatología del TEC. Esta página ofrece una amplia gama de características esenciales para el control y seguimiento de microorganismos, incluyendo: Conteo de Microorganismos, Informes Detallados, Historial de Datos, Gestión de Microorganismos, Visualización de Microorganismos, Gestión de Usuarios.
        </Typography>
      </Box>
    </div>
  );
}
