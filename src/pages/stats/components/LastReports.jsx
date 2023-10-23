import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import { getLastReports } from '../../../storage/dataService';
import { Button } from '@mui/material';

const reports = getLastReports();
function LastReports() {
  return (
    <div>
      <TableContainer component={Paper} 
		sx={{
			
			width:'80%',
			display:'flex', 
			margin: 'auto',
			justifyContent:'center', 
			alignItems:'center'
  	 }}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead sx={{bgcolor:'#002060'}}>
          <TableRow>
            <TableCell sx={{fontSize:'20px', color:'white'}}><b>Fecha</b></TableCell>
            <TableCell align="center" sx={{fontSize:'20px', color:'white'}}><b>Hora</b></TableCell>
            <TableCell align="center" sx={{fontSize:'20px', color:'white'}}><b>Enlace</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((report) => (
            <TableRow
              key={report.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{report.date}</TableCell>
              <TableCell align="center">{report.time}</TableCell>
              <TableCell align="center"><Button variant='contained' href={report.link} sx={{bgcolor:'#002060'}}>Reporte</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default LastReports
