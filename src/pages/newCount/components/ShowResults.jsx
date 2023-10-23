import React from 'react';
import { Box, Divider, Typography} from '@mui/material';

export default function ShowResults(props) {
  const results = props.count;
  const suma = results.reduce((total, elemento) => total + elemento.count, 0);
  return (
    <Box width={'95%'} minWidth={'200px'} border={'1px solid black'} margin={'20px auto'} alignContent={'center'} borderRadius={'15px'} bgcolor={'#b5b5b5'}>
      <Typography variant='h2' fontSize={'25px'} py={'15px'} color={'white'} bgcolor={'#002060'} borderRadius={'15px 15px 0 0'}>{props.funtGroup}</Typography>
      
        {results.map((resultgender) => (
          <Box key={resultgender.gender} display={'flex'} justifyContent={'space-between'}>
            <Typography m={'10px 10% 10px 10% '} variant='h3' fontSize={'20px'}>{resultgender.gender}</Typography>
            <Typography m={'10px 10% 10px 0'} variant='h3' fontSize={'20px'}>{resultgender.count}</Typography>
          </Box>
        ))}
      <Divider variant='middle' sx={{bgcolor:'black'}}></Divider>
      <Box display={'flex'} justifyContent={'space-between'}>
            <Typography m={'10px 10% 10px 10% '} variant='h3' fontSize={'25px'}><b>Total</b></Typography>
            <Typography m={'10px 10% 10px 0'} variant='h3' fontSize={'25px'}><b>{suma}</b></Typography>
      </Box>
    </Box>
  );
};