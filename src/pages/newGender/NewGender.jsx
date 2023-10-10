import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function NewGender() {
  const [gender, setGender] = useState('');
  const [images, setImages] = useState([]);


  const handleChange = (event) => {
    setGender(event.target.value);
  };

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
    <Box margin={'auto'} alignContent={'center'} justifyContent={'center'} textAlign={'center'}>
        <Typography variant='h1' fontSize={'35px'} m={'30px auto'}><b>Registrar un nuevo género</b></Typography>
        <Box display={'flex'} justifyContent={'space-between'} width={'50%'} m={'auto'} alignContent={'center'}>
            <TextField id="gender" label="Género del microorganismo" variant="outlined" sx={{width:'500px'}}/>
            <FormControl sx={{width:'300px'}}>
                <InputLabel id="functional_group_input">Grupo funcional</InputLabel>
                <Select
                    labelId="functional_group_label"
                    id="functional_group"
                    value={gender}
                    label="Grupo funcional"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Hongo</MenuItem>
                    <MenuItem value={2}>Pseudohongo</MenuItem>
                    <MenuItem value={3}>Bacteria anaeróbica</MenuItem>
                    <MenuItem value={4}>Bacteria aeróbica</MenuItem>
                    <MenuItem value={5}>Actinomiceto</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            onChange={handleImageUpload}
        />
        <label htmlFor="image-upload">
            <Button variant="contained" component="span" size='large' sx={{bgcolor:'#002060', marginTop:'50px', mb:'20px', fontSize:'23px'}}>
            Agregar imagen
            </Button>
        </label>
        <Typography variant='h2' fontSize={'20px'}>(Ingrese un mínimo de 10 imagenes del microorganismo para garantizar la presición del modelo)</Typography>
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
        <Button variant="contained" component="span" size='large' sx={{bgcolor:'#002060', marginTop:'20px', fontSize:'23px'}}>
            Registrar género
        </Button>
    </Box>
  )
}
