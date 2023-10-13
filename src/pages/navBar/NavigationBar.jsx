import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Button} from '@mui/material';
import { AccountCircle, ExpandMore } from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import LogoBlanco from '../../assets/logoTECBLANCO.png';
export default function NavigationBar(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [adminAnchorEl, setAdminAnchorEl] = React.useState(null);

  const {user, logout} = useUser()

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuAdminOpen = (event) => {
    setAdminAnchorEl(event.currentTarget);
  };

  const handleMenuAdminClose = () => {
    setAdminAnchorEl(null);
  };
  
  const handleCerrarSesion = () => {
    logout()
    handleMenuClose();
  };


  // const handleChangeCredentials = () => {
  //   // Agrega aquí la lógica para cambiar las credenciales del usuario
  //   // Por ejemplo, puedes abrir un cuadro de diálogo o navegar a una página de cambio de credenciales
  //   console.log('Cambiar Credenciales');
  //   handleMenuClose(); // Cierra el menú después de hacer clic en "Cambiar Credenciales"
  // };

  return (
    <Box>
      <AppBar sx={{bgcolor:'#002060'}}>
      <Toolbar>
        <Link to={'/'}>
          <img src={LogoBlanco} alt="Logo" width='200px' style={{ marginRight: '16px'}} />
        </Link>
        {user ? (
          <>
            <Link to={'./manuals'}>
              <Button sx={{mx:'10px', color:'white', fontSize:'20px'}}>MANUAL</Button>
            </Link>
            <Link to={'./new_count'}>
              <Button sx={{mx:'10px', color:'white', fontSize:'20px'}}>CONTEO</Button>
            </Link>
            <Link to={'./new_gender'}>
              <Button sx={{mx:'10px', color:'white', fontSize:'20px'}}>NUEVA ESPECIE</Button>
            </Link>
            {user.rol === "Administrador"? (
              <>
                <Button
                  onClick={handleMenuAdminOpen}
                  endIcon = {<ExpandMore sx={{ fontSize: '20px' }} />}
                  sx={{ mx: '10px', color: 'white', fontSize: '20px' }}>
                  ADMIN
                </Button>
                <Menu
                  anchorEl={adminAnchorEl}
                  open={Boolean(adminAnchorEl)}
                  onClose={handleMenuAdminClose}
                >

                      <>
                        <MenuItem onClick={handleMenuAdminClose} component={Link} to='/registered_users'>Gestionar usuario</MenuItem>
                        <MenuItem onClick={handleMenuAdminClose} component={Link} to='/registered_microorganisms'>Gestionar microorganismos</MenuItem>
                        <MenuItem onClick={handleMenuAdminClose} component={Link} to='/stats'>Reportes y estadísticas</MenuItem>
                      </>
                  </Menu>
              </>
            ):null}
          </>
        ):null}

        <Box sx={{flexGrow:1}} />
          <IconButton
            onClick={handleMenuOpen}
            color="inherit"
          >
            <AccountCircle sx={{fontSize:'40px'}}/>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {user ? (
              <>
                <MenuItem onClick={handleCerrarSesion} component={Link} to='./'>Cerrar Sesión</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to='/change_credentials'>Cambiar Credenciales</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleMenuClose} component={Link} to='/login'>Ingresar</MenuItem>
              </>
            )}
          </Menu>
      </Toolbar>
    </AppBar>
    <Outlet />
    </Box>
  );
}