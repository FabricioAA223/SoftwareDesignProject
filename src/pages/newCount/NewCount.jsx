import React, { useState } from 'react';
import { Box, Button} from '@mui/material';
import ShowResults from './components/ShowResults';

export default function NewCount() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [counted, setCounted] = useState(false);

    const handleMakeCount = () => {
        setCounted(true);
    };

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  return (
    <Box display={'flex'} margin={'20px auto'} alignContent={'center'} justifyContent={'center'} textAlign={'center'} >
        <Box width={'45%'}>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="image-upload"
                onChange={handleImageUpload}
            />
            <label htmlFor="image-upload">
                <Button variant="contained" component="span" size='large'>
                Subir imagen
                </Button>
            </label>
            {(
                selectedImage && 
                (
                <Box width={'100%'} maxHeight={'750px'} border={'1px solid grey'} marginY={'20px'} bgcolor={'lightgray'} overflow={'scroll'}>
                    <img src={selectedImage} alt="Imagen seleccionada" width={'100%'} height={'100%'}/>
                </Box>
                )
            ) 
            ||
            (
                <Box width={'100%'} height={'750px'} border={'1px solid black'} borderRadius={'20px'} marginY={'20px'} bgcolor={'lightgray'}>

                </Box>
            )} 

            <Button variant="contained" component="span" size='large' disabled = {!counted}>
                Generar informe
            </Button>
        </Box>

        <Box width={'3%'}></Box>

        <Box width={'45%'}>
            <Button variant="contained" component="span" size='large' disabled= {selectedImage == null} onClick={handleMakeCount}>
                Realizar conteo
            </Button>
            {
                (
                    counted && 
                    (
                    <Box width={'100%'} minHeight={'750px'} border={'1px solid grey'} borderRadius={'20px'} marginY={'20px'} bgcolor={'lightgray'} /*overflow={'scroll'}*/>
                        <ShowResults/>
                    </Box>
                    )
                ) 
                ||
                (
                    <Box width={'100%'} height={'750px'} border={'1px solid black'} borderRadius={'20px'} marginY={'20px'} bgcolor={'lightgray'}></Box>
                )
            } 
        </Box>
    </Box>
  )
}
