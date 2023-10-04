import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';

function LastStats(props) {

  const reports = props.reports;
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
              <TableCell width={'50%'} align = 'center' sx={{fontSize:'20px', color:'white'}}><b>{props.month.charAt(0).toUpperCase() + props.month.slice(1).toLowerCase()}</b></TableCell>
              <TableCell width={'50%'} align="right" sx={{fontSize:'20px', color:'white'}}><b>Conteos realizados: {reports.length}</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => (
              <TableRow
                key={report.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align='right'>{report.date}</TableCell>
                <TableCell align="center">{report.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default LastStats
