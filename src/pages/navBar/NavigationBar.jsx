import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useAuth } from '../../ContextAuthentication/AuthContext'; // Importa el contexto
function NavigationBar({ isLandingPage }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // Usa el hook de autenticación para obtener el estado de inicio de sesión y la función para cambiarlo
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleChangeCredentials = () => {
    // Agrega aquí la lógica para cambiar las credenciales del usuario
    // Por ejemplo, puedes abrir un cuadro de diálogo o navegar a una página de cambio de credenciales
    console.log('Cambiar Credenciales');
    handleMenuClose(); // Cierra el menú después de hacer clic en "Cambiar Credenciales"
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          {/*<img src="/logo.png" alt="Logo" style={{ marginRight: '16px' }} /> */}
          Mi Aplicación
        </Typography>

        <div style={{ flex: 1 }} />
          {isLoggedIn ? (
          <>
              {/* Elementos de navegación */}
              <Typography variant="h6" style={{ marginRight: '16px', cursor: 'pointer' }}>
                HOME
              </Typography>
              <Typography variant="h6" style={{ marginRight: '16px', cursor: 'pointer' }}>
                MANUAL
              </Typography>
              <Typography variant="h6" style={{ marginRight: '16px', cursor: 'pointer' }}>
                CONTEO
              </Typography>
              <Typography variant="h6" style={{ marginRight: '16px', cursor: 'pointer' }}>
                NUEVA ESPECIE
              </Typography>
          </>
        ) : null}

        <div>
          <IconButton
            onClick={handleMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {isLoggedIn ? (
              <>
                <MenuItem onClick={() => setIsLoggedIn(false)}>Cerrar Sesión</MenuItem>
                <MenuItem onClick={() => setIsLoggedIn(false)}>Cambiar Credenciales</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleMenuClose}>Cambiar Credenciales</MenuItem>
              </>
            )
            }
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
