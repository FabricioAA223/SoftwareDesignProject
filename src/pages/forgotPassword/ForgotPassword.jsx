import React, { useState, useEffect } from 'react';
import {getUsers}  from '../../storage/dataService';

import { Container, Paper, Typography, TextField, Button, Box} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TECimagen from '../../assets/TECimagen.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "100px",
    height: "auto",
  },
  paper: {
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // Inicialmente asumimos que el correo es válido

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Al cambiar el correo, volvemos a asumir que es válido (elimina el resaltado rojo)
    setIsValidEmail(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtén la lista de usuarios del servicio de datos
    const users = getUsers();

    // Verifica si el correo ingresado coincide con alguno de los correos en la lista
    const isEmailValid = users.some((user) => user.email === email);

    if (!isEmailValid) {
      //alert('El correo no existe');
      setIsValidEmail(false);
      
    } else {
      setIsValidEmail(true);
      console.log('Correo válido:', email);
      // Realiza la lógica para enviar el correo electrónico
    }
  };

  return (
    <div style={styles.container} >
      <img src={TECimagen} alt="Logo" style={{ width: 'auto', height: 'auto'}} />
      <Container component="main" maxWidth="md" >
        <Paper elevation={1} sx={styles.paper}>
          <Typography component="h1" variant="h5">
            Olvidé mi contraseña
          </Typography>
          <form onSubmit={handleSubmit} >
            <Box display={'flex'} >
                <TextField                
                variant="outlined"
                margin="normal"
                fullWidth
                label=" Ingrese su Correo Electrónico"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleEmailChange}
                error={!isValidEmail}
                helperText={!isValidEmail ? 'El correo no existe' : ''}
                />
                {isValidEmail && (<CheckCircleIcon sx={{ margin: 'auto', fontSize: '40px', marginLeft: '10px'
                }} />
          )}
            </Box>
            <Typography variant="body2" sx={{ mt: 2, mb: 2 }} color="grey">
                Se enviara una contraseña temporal a su correo por favor verifique la bandeja de entrada o spam.
            </Typography>  
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"}> 
                <Button 
                variant="contained" 
                endIcon={<EmailIcon />}
                type="submit"
                sx={{ mt: 3, mb: 2 }}
                >
                Enviar Correo
                </Button>
            </Box>
            
          </form>
        </Paper>
      </Container>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} marginTop={'10%'}>
        <Typography variant="body2" color="grey">
          Por favor, ingrese de nuevo.
        </Typography>     
        <Button variant='contained' startIcon={<ArrowBackIcon/>} > 
          Pagina de inicio
        </Button>        
      </Box>      

    </div>
  );
};

export default ForgotPassword;
