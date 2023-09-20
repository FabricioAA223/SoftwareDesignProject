import * as React from 'react';
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

function createData(name, email, type) {
  return { name, email, type};
}

const users = getUsers();

const rows = users.map((user) => createData(user.username, user.email, user.rol));

export default function RegisteredUsers() {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre de usuario</TableCell>
            <TableCell align="left">Correo electrónico</TableCell>
            <TableCell align="center">Tipo de usuario</TableCell>
            <TableCell align="center">Gestionar usuario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>

              <TableCell align="center">
              <Select sx={{ m: 1, minWidth: 120 }}
                value={type}
                onChange={handleChange}
                displayEmpty 
                defaultValue={row.type}
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem value={10}>Estudiante</MenuItem>
                <MenuItem value={20}>Encargado</MenuItem>
                <MenuItem value={30}>Administrador</MenuItem>
              </Select>
              </TableCell>

              <TableCell align="center"><Button variant='contained'>Eliminar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}