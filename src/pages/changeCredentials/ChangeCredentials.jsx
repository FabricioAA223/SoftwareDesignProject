import React, { useState } from 'react';
import { Box, Typography, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const boxStyle = {
  backgroundColor: 'lightgray',
  width: '550px',
  height: '220px',
  borderRadius: '15px',
  margin: '30px auto 10px auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const innerBoxStyle = {
  backgroundColor: 'gray',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  margin: '10px auto',
};

const textFieldStyle = {
  marginTop: '25px',
};

const buttonStyle = {
  marginTop: '10px',
  backgroundColor: '#002060',
};

export default function ChangeCredentials() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

      <Box style={boxStyle}>
        <Typography variant='h1' fontSize={'30px'}> <b>Correo Electrónico</b></Typography>
        <Box style={innerBoxStyle}>
          <Typography margin='15px' variant='h1' fontSize={'20px'}> <b>ssssssssssss</b></Typography>
        </Box>
        <Button style={buttonStyle} variant="contained" color="primary">
          Cambiar
        </Button>
      </Box>

      <Box style={boxStyle}>
        <Typography variant='h1' fontSize={'30px'}><b>Contraseña</b></Typography>
        <TextField
          margin='dense'
          variant='outlined'
          fullWidth
          style={textFieldStyle}
          type={showPassword ? 'text' : 'password'}
          value='contraseña'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button style={buttonStyle} variant="contained" color="primary">
          Cambiar
        </Button>
      </Box>
    </div>
  );
}
