import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import bgImg from '../landingPage/assets/bgImage.jpg';

function Landing() {
  const backgroundStyle = {
    backgroundImage: 'url("'+bgImg+'")', // Ruta relativa a la imagen
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '98.3vh', // Ajusta la altura según tus necesidades
    width:'100.45%',
    display: 'flex',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 1)', // Agrega un fondo semi-transparente para que el texto sea legible
    padding: '16px', // Ajusta el espaciado según tus necesidades
    borderRadius: '20px', // Ajusta el radio de borde según tus necesidades
    textAlign: 'center',
    marginTop:'180px',
    width:'30%',
    marginLeft:'7%',
    height:'380px'
  };

  return (
    <div style={backgroundStyle}>
      <img src={bgImg} alt='Imagen1s' style={{display:'none'}}/>
      <div style={contentStyle} >
        <Typography variant='h1' fontSize={'32px'} textAlign={'center'} fontFamily={'Georgia'}><b>¡Bienvenido al laboratorio de fitopatologías y biocontroladores!</b></Typography>
        <Typography variant='h2' fontSize={'25px'} mt={'35px'} mb={'45px'} textAlign={'justify'} fontFamily={'Lato'}>
          Esta página ha sido creada en colaboración con la escuela de Ingeniería en Computación con el objetivo de 
          agilizar y simplificar el proceso de conteo de unidades formadoras de colonias en diversas muestras. 
          Nuestra aplicación, diseñada exclusivamente para nuestro laboratorio, destaca por su precisión excepcional 
          y su capacidad para reducir significativamente el tiempo necesario en el conteo de colonias de diversos grupos de microorganismos.
        </Typography>
        <Box textAlign={'center'}>
          <Button sx={{bgcolor:'#002060'}} variant='contained' size='large' href='/group_count'>Realizar conteo</Button>
        </Box>
      </div>
      {/* <Box width={'40%'} minWidth={'700px'}>
        <img src={imgBG} alt="Pentagon" width={'100%'} height={'850px'} />
      </Box> */}
    </div>
  );
}

export default Landing;
