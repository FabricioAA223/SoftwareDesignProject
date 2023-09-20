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
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5' ><b>{props.functionalGroup}</b></Typography>

        </AccordionSummary>
        <AccordionDetails sx={{borderTop:'1px black solid'}}>
            {genders.map(gender => (
                // <div>Soy el genero: {gender}</div>
                <Box display={'flex'} margin={'10px auto'} justifyContent="space-between" alignItems="center">
                    <Typography marginLeft={'50px'} variant="subtitle1" fontSize={'19px'} component="div">{gender.name}</Typography>
                    <Button sx={{marginRight:'50px'}} variant='contained'>Eliminar</Button>
                </Box>
            ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

FunctionalGroupAccordion.defaultProps = {
    functionalGroup : '',
    genders : [],
};