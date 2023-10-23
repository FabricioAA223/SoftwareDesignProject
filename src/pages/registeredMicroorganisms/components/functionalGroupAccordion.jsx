import React from 'react'
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getMicroorganismByfunctGroup } from '../../../storage/dataService';

export default function FunctionalGroupAccordion(props) {
    const genders = getMicroorganismByfunctGroup(props.functionalGroup);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:'#002060'}}/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant='h5' ><b>{props.functionalGroup}</b></Typography>

      </AccordionSummary>
      <AccordionDetails sx={{borderTop:'1px black solid'}}>
          {genders.map(gender => (
              // <div>Soy el genero: {gender}</div>
              <Box display={'flex'} margin={'10px 50px'} justifyContent="space-between" alignItems="center">
                  <Typography  variant="subtitle1" fontSize={'19px'} component="div">{gender.name}</Typography>
                  <Button variant='contained' sx={{bgcolor:'#002060'}}>Eliminar</Button>
              </Box>
          ))}
      </AccordionDetails>
    </Accordion>
  )
}

FunctionalGroupAccordion.defaultProps = {
    functionalGroup : '',
    genders : [],
};