import React from 'react';
import { AppBar, Toolbar, Menu, MenuItem, Box, Button} from '@mui/material';
import { AccountCircle, ExpandMore } from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import LogoBlanco from '../../assets/logoTECBLANCO.png';
export default function NavigationBar(){
  const {user, logout} = useUser()

  //>>>>>>>>>>>>>>>>>>>>Handles para el menu del usuario (cuenta)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  //>>>>>>>>>>>>>>>>>>>>Handles para el menu de administrador<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  const [adminAnchorEl, setAdminAnchorEl] = React.useState(null);
  const handleMenuAdminOpen = (event) => {
    setAdminAnchorEl(event.currentTarget);
  };
  const handleMenuAdminClose = () => {
    setAdminAnchorEl(null);
  };

    //>>>>>>>>>>>>>>>>>>>>Handles para el menu de conteo<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  const [countAnchorEl, setCountAnchorEl] = React.useState(null);
    const handleMenuCountOpen = (event) => {
      setCountAnchorEl(event.currentTarget);
    };
    const handleMenuCountClose = () => {
      setCountAnchorEl(null);
    };

  
  const handleCerrarSesion = () => {
    logout()
    handleMenuClose();
  };

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
            <Button
              onClick={handleMenuCountOpen}
              endIcon = {<ExpandMore sx={{ fontSize: '20px' }} />}
              sx={{ mx: '10px', color: 'white', fontSize: '20px' }}>
              CONTEO
            </Button>
            <Menu
              anchorEl={countAnchorEl}
              open={Boolean(countAnchorEl)}
              onClose={handleMenuCountClose}
            >
              <MenuItem onClick={handleMenuCountClose} component={Link} to='/individual_count'>Individual</MenuItem>
              <MenuItem onClick={handleMenuCountClose} component={Link} to='/group_count'>Grupal</MenuItem>
            </Menu>
            {user.rol === "Encargado" || user.rol === "Administrador"? (
              <Link to={'./new_gender'}>
                <Button sx={{mx:'10px', color:'white', fontSize:'20px'}}>NUEVO GÉNERO</Button>
              </Link>
            ):null}
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
                  <MenuItem onClick={handleMenuAdminClose} component={Link} to='/registered_users'>Gestionar usuario</MenuItem>
                  <MenuItem onClick={handleMenuAdminClose} component={Link} to='/registered_microorganisms'>Gestionar microorganismos</MenuItem>
                  <MenuItem onClick={handleMenuAdminClose} component={Link} to='/stats'>Reportes y estadísticas</MenuItem>
                </Menu>
              </>
            ):null}
            <Box sx={{flexGrow:1}} />
                <Button
                  sx={{mx:'10px', color:'white', fontSize:'20px'}}
                  onClick={handleMenuOpen}
                  color="inherit"
                  startIcon={<AccountCircle sx={{fontSize:'40px'}}/>}
                >
                  {user.username}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleCerrarSesion} component={Link} to='./'>Cerrar Sesión</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to='/change_credentials'>Cambiar Credenciales</MenuItem>
                </Menu>
          </>
          ):(
            <>
          <Box sx={{flexGrow:1}} />
          <Link to={'/login'}>
            <Button sx={{mx:'10px', color:'white', fontSize:'20px'}} color="primary" variant='contained'>Ingresar</Button>
          </Link>
          </>
          )}
      </Toolbar>
    </AppBar>
    <Outlet />
    </Box>
  );
}