import React from 'react';
import { Container, Paper, Grid, TextField, Button, Link, Typography } from '@mui/material';
import TECimagen from '../../assets/TECimagen.png';
const Login = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Container component="main" maxWidth="xs">
            <img src={TECimagen} alt="Logo" style={{ width: '100%', height: '100%' }} />
            <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Iniciar Sesión
                </Typography>        
                <form noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="username"
                    label="Nombre de usuario"
                    name="username"
                    autoComplete="username"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
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
