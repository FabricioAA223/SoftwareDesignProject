import React from 'react'
import LastReports from './components/LastReports'
import LastStats from './components/LastStats'
import { Box, Typography } from '@mui/material'
import { dividePorMes } from '../../storage/dataService';

function Stats() {
    
    const informesAgrupadosPorMes = dividePorMes();

  return (
    <Box alignContent={'center'} textAlign={'center'} border={'1px grey solid'} width={'80%'} margin={'auto'} borderRadius={'20px'} bgcolor={'lightgrey'}>
        <Typography margin={'20px'} variant='h1' fontSize={'20px'}><b>Conteos realizados en los últimos siete días</b></Typography>
        <LastReports />
        <Typography margin={'60px auto 20px auto'} variant='h1' fontSize={'20px'}><b>Conteos realizados en los últimos seis meses</b></Typography>

        {Object.keys(informesAgrupadosPorMes).map((mes) => (
            <LastStats month={mes} reports={informesAgrupadosPorMes[mes]}/>
        ))}
    </Box>
  )
}

export default Stats
