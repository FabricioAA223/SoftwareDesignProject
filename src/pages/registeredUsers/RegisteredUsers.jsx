import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { getUsers } from '../../storage/dataService';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';


const usuarios = getUsers();

export default function RegisteredUsers() {
  const [users, setUsers] = useState(usuarios);

  const handleChange = (event, userId) => {
    //TODO: Modificar el rol en la base de datos
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return {...user , rol: event.target.value };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <TableContainer component={Paper} 
		sx={{
			
			width:'90%',
			display:'flex', 
			margin: 'auto',
			justifyContent:'center', 
			alignItems:'center'
  	 }}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead sx={{bgcolor:'#002060'}}>
          <TableRow>
            <TableCell sx={{fontSize:'20px', color:'white'}}><b>Nombre de usuario</b></TableCell>
            <TableCell align="left" sx={{fontSize:'20px', color:'white'}}><b>Correo electrónico</b></TableCell>
            <TableCell align="center" sx={{fontSize:'20px', color:'white'}}><b>Tipo de usuario</b></TableCell>
            <TableCell align="center" sx={{fontSize:'20px', color:'white'}}><b>Gestionar usuario</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.username}
              </TableCell>
              <TableCell align="left">{user.email}</TableCell>

              <TableCell align="center">
              <Select sx={{minWidth: 120 }}
                value={user.rol}
                onChange={(e) => handleChange(e, user.id)}
                >
                <MenuItem value={"Estudiante"}>Estudiante</MenuItem>
                <MenuItem value={"Encargado"}>Encargado</MenuItem>
                <MenuItem value={"Administrador"}>Administrador</MenuItem>
              </Select>
              </TableCell>

              <TableCell align="center"><Button variant='contained' sx={{bgcolor:'#002060'}}>Eliminar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}