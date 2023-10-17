import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';

const boxStyle = {
  backgroundColor: 'lightgray',
  width: '400px',
  height: '150px',
  borderRadius: '15px',
  margin: '10px auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const buttonStyle = {
  backgroundColor: '#002060',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
};

export default function Manuals() {
  const pdfUrl = 'URL_DEL_PDF'; // Reemplaza con la URL del PDF que deseas enlazar

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Box style={boxStyle}>
        <Typography variant='h1' fontSize={'24px'}> <b>Realizar un Conteo</b></Typography>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" startIcon={<PictureAsPdf />} style={buttonStyle}>
            Manual
          </Button>
        </a>
      </Box>

      <Box style={boxStyle}>
        <Typography variant='h1' fontSize={'24px'}> <b>Registrar nueva especie</b></Typography>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" startIcon={<PictureAsPdf />} style={buttonStyle}>
            Manual
          </Button>
        </a>
      </Box>

      <Box style={boxStyle}>
        <Typography variant='h1' fontSize={'24px'}> <b>Cambiar credenciales de acceso</b></Typography>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" startIcon={<PictureAsPdf />} style={buttonStyle}>
            Manual
          </Button>
        </a>
      </Box>
    </div>
  );
}
