import React, { useState } from 'react';
import {getUsers}  from '../../storage/dataService';
import { Container, Paper, Grid, TextField, Button, Link, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import TECimagen from '../../assets/TECimagen.png';


const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña


    

    const handleSubmit = (event) => {
        event.preventDefault();
      
        const users = getUsers();
        const foundUser = users.find((user) => user.email === email && user.password === password);
      
        if (foundUser) {
          setIsAuthenticated(true);
          console.log('Usuario autenticado:', foundUser);
        } else {
          setIsAuthenticated(false);
          setError(true); // Establece el estado de error en true 
        
          // Después de 3 segundos, restablece el estado de error a false fino
          setTimeout(() => {
            setError(false);
          }, 3000);
      
          console.log('Usuario no autenticado');
        }
      };
      const toggleShowPassword = () => {
        // Cambia entre mostrar y ocultar la contraseña, promete?
        setShowPassword(!showPassword);
      };
    
      const handleInputChange = () => {
        setError(false); // Establece el estado de error en false
      };

      

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Container component="main" maxWidth="xs">
                <img src={TECimagen} alt="Logo" style={{ width: '100%', height: '100%' }} />
                <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography component="h1" variant="h5">
                        Iniciar Sesión
                    </Typography> 
                    <form onSubmit={handleSubmit}>
                        <TextField
                        required
                        pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Nombre de usuario"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={error} // Agrega la prop 'error' para cambiar el color
                        helperText={error ? 'Correo o contraseña incorrectos' : ''} // Mensaje de error
                        
                        />
                        
                        <TextField
                            required
                            patterr="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type={showPassword ? 'text' : 'password'} // Muestra la contraseña si showPassword es true

                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={error} // Agrega la prop 'error' para cambiar el color
                            InputProps={{
                                endAdornment: (      
                                    <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={toggleShowPassword}
                                      edge="end"
                                    >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Iniciar Sesión
                        </Button>
                    </form>
                    <Grid container>
                    <Grid item xs style={{ textAlign: 'center' }}>
                        <Link href="#" variant="body2">
                        ¿Olvidaste tu contraseña?
                        </Link>
                    </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default Login;
