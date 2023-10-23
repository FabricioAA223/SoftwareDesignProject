import React, { useState } from 'react';
import {getUsers}  from '../../storage/dataService';
import { Container, Paper, Grid, TextField, Button, Link, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import TECimagen from '../../assets/TECimagen.png';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';


const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [passwordd, setPassword] = useState('');
    //const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

    //const {login, user} = useUser();

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    
    //   const users = getUsers();
    //   const foundUser = users.find((user) => user.email === email && user.password === password);
    
    //   if (foundUser) {
    //     //setIsAuthenticated(true);
    //     //console.log('Usuario autenticado:', foundUser);
    //     localStorage.setItem('user', JSON.stringify(foundUser));
    //     //console.log("Usuario codificado", JSON.stringify(foundUser))
    //     login(foundUser);
    //   } else {
    //     //setIsAuthenticated(false);
    //     setError(true); // Establece el estado de error en true 
      
    //     // Después de 3 segundos, restablece el estado de error a false fino
    //     setTimeout(() => {
    //       setError(false);
    //     }, 3000);
    
    //     console.log('Usuario no autenticado');
    //   }
    // };

    // -----------------------------------------------IMPLEMENTAR EL LOGIN CON LA BASE DE DATOS (POR AGREGAR) --------------------------------------------------------------------
    // const login = async (username, password) => {
    //   try {
    //     const response = await fetch('/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ username, password }),
    //     });
    
    //     if (response.ok) {
    //       const data = await response.json();
    //       // Almacena el token JWT en el almacenamiento local o en el contexto.
    //       localStorage.setItem('token', data.token);
    //     } else {
    //       // Manejo de errores de inicio de sesión.
    //     }
    //   } catch (error) {
    //     // Manejo de errores de red.
    //   }
    // };
    

    const toggleShowPassword = () => {
      // Cambia entre mostrar y ocultar la contraseña, promete?
      setShowPassword(!showPassword);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, passwordd }),
        });
  
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          console.log("Token de usuario:");
          console.log(data.token);
          window.location.href = '/';
          // La solicitud se realizó con éxito, puedes redirigir al usuario o realizar otras acciones.
        } else {
          console.log("Usuario no autenticado");
          setError(true);
           // Después de 3 segundos, restablece el estado de error a false fino
          setTimeout(() => {
          setError(false);
        }, 3000)
        }
      } catch (error) {
        console.error(error);
        // Manejar errores de red u otros errores aquí si es necesario.
      }
    };
  
    // const handleInputChange = () => {
    //   setError(false); // Establece el estado de error en false
    // };

    
  // if (user) {
  //   return <Navigate to="/"/>;
  // }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
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
                            value={passwordd}
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
                            sx={{ mt: 3, mb: 2 ,bgcolor:'#002060'}}
                        >
                            Iniciar Sesión
                        </Button>
                    </form>
                    <Grid container>
                    <Grid item xs style={{ textAlign: 'center' }}>
                        <Link href="./forgot_password" variant="body2">
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
