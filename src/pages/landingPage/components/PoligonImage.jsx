import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import pentagonImage from '../assets/lab_image1.jpg';
import { Box } from '@mui/material';

const pentagonImageContainerStyle = {
    mt: '60px',
    position: 'relative',
    // position: 'absolute',
    top: 0,
    right: 0,
    background: 'url(' + pentagonImage + ')',
    backgroundSize: 'cover',
    width: '900px', // Ajusta el tamaño de acuerdo a tus necesidades
    height: '800px',
    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 0% 100%, 0% 38%)',
    transform: 'rotate(180deg)'
  };


const pentagonImageStyle = {
     width: '100%',
     height:'100%',
    transform: 'rotate(180deg)'
  };

function PentagonImage() {

  return (
    <Card>
      <CardContent>
        <Box sx={{...pentagonImageContainerStyle}}>
            <img src={pentagonImage} alt="Pentagon" style={{...pentagonImageStyle}} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default PentagonImage;