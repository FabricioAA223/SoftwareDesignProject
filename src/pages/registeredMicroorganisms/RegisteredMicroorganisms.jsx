import React from 'react'
import {getFunctionalGroups} from '../../storage/dataService';
import FunctionalGroupAccordion from './components/functionalGroupAccordion';
import { Box, Typography } from '@mui/material';

export default function RegisteredMicroorganisms() {
    const functionalGroups = getFunctionalGroups();

  return (
    <Box width={'80%'} margin={'auto'} textAlign={'center'} border={'1px black solid'} borderRadius={'20px'} bgcolor={'#002060'} padding={'10px'}> 
        <Typography variant='h1' fontSize={'35px'} color={'white'}><b>Géneros de grupos funcionales registrados en el sistema</b></Typography> 
        {functionalGroups.map(group => (
            // <div>Hola soy {group}, mis generos son: {getMicroorganismByfunctGroup({group})}</div>
            <Box margin={'10px 30px'}><FunctionalGroupAccordion functionalGroup={group}/></Box>
        ))}
    </Box>
  )
}
