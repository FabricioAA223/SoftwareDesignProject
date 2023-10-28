import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from 'react-router-dom';
import { getCountsResultsXFuntGroup } from '../../storage/dataService';

export default function NewGroupCount() {
    const navigate = useNavigate();
  
  const [images, setImages] = useState([]);

  const handleSubmit = () => {
    const imagesResults = []
    for (let index = 0; index < images.length; index++) {
        //const img = images[index];
        //TODO: Enviar la imagen a la IA para obtener resultados
        imagesResults.push(getCountsResultsXFuntGroup());
    }
    if(imagesResults.length >= 1){
      navigate('/data_report', 
        {
        state: {
          imagesResults,
        }
        }
      );
    } else{
      alert("Debe seleccionar al menos una imagen para realizar el conteo")
    }
    
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataURL = event.target.result;
  
        // Actualiza la lista de imágenes agregando la nueva imagen
        setImages([...images, { url: imageDataURL }]);
      };
      reader.readAsDataURL(file);
    }
    console.log(images)
  };
  

  const handleImageDelete = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <Box mt={'80px'} mx={'auto'} alignContent={'center'} justifyContent={'center'} textAlign={'center'}>
        <Typography variant='h1' fontSize={'35px'} mb={'15px'}><b>Realizar un conteo grupal</b></Typography>


        <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            onChange={handleImageUpload}
        />
        <label htmlFor="image-upload">
            <Button variant="contained" component="span" size='large' sx={{bgcolor:'#002060', marginTop:'50px', mb:'20px', fontSize:'23px'}}>
            Agregar imágenes
            </Button>
        </label>
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            overflow={'auto'}
            border={'1px solid black'}
            borderRadius={'20px'}
            marginY={'20px'}
            width={'90%'}
            marginX={'auto'}
            height={'470px'}
            bgcolor={'lightgray'}
        >
            {images.map((image, index) => (
                <Box 
                    key={index} 
                    width={'300px'} 
                    border={'1px solid grey'} 
                    marginX={'40px'} 
                    borderRadius={'15px'}
                    display={'flex'}
                    flexDirection={'column'}  
                    height={'80%'}
                    padding={'15px'}
                    justifyContent={'space-between'}
                    bgcolor={'white'}
                >
                    <img src={image.url} alt="Imagen seleccionada" style={{maxHeight:'320px'}}/>
                    <Button variant='outlined' endIcon={<DeleteIcon />} size='large' sx={{mt:'10px' , fontSize:'18px', marginX:'auto'}} onClick={() => handleImageDelete(index)}>Eliminar</Button>
                </Box>
            ))}
        </Box>
        <Button onClick={handleSubmit} variant="contained" component="span" size='large' sx={{bgcolor:'#002060', marginTop:'20px', fontSize:'23px'}}>
            Realizar conteos
        </Button>
    </Box>
  )
}
