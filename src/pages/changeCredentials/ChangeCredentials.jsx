import React, { useState } from 'react';
import { Box, Typography, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useUser } from '../../context/UserContext';

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
  border: '1px black solid',
  borderRadius: '10px',
  textAlign: 'center',
  margin: '10px auto',
  backgroundColor:'white',
};

const textFieldStyle = {
  marginTop: '25px',
  borderRadius:'10px',
  border: '1px black solid',
  textAlign:'center',
};

const buttonStyle = {
  marginTop: '10px',
  backgroundColor: '#002060',
};

export default function ChangeCredentials() {
  const [showPassword, setShowPassword] = useState(false);

  const { user } = useUser(); // Obtén el usuario del contexto

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop:'80px' }}>

      <Box style={boxStyle}>
        <Typography variant='h1' fontSize={'30px'}> <b>Correo Electrónico</b></Typography>
        <Box style={innerBoxStyle}>
          <Typography margin='15px' variant='h1' fontSize={'20px'}>{user.email}</Typography>
        </Box>
        <Button style={buttonStyle} variant="contained" color="primary">
          Cambiar
        </Button>
      </Box>

      <Box style={boxStyle}>
        <Typography variant='h1' fontSize={'30px'}><b>Contraseña</b></Typography>
        <TextField
          sx={{bgcolor:'white'}}
          margin='dense'
          variant='outlined'
          style={textFieldStyle}
          type={showPassword ? 'text' : 'password'}
          value={user.password}
          
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
