import React, { useState , useEffect } from 'react';
import { Box, Button, Divider, Typography} from '@mui/material';
import ShowResults from './components/ShowResults';
import { getCountsResultsXFuntGroup } from '../../storage/dataService';
import { useNavigate } from 'react-router-dom';

export default function NewCount() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [counted, setCounted] = useState(false);
    const [countsResult, setCountsResults] = useState(null);
    const [sumaTotal, setSumaTotal] = useState(0); // Usamos un estado para la suma total

    const navigate = useNavigate();


    const handleMakeCount = () => {
        // TODO: Realizar la consulta a la base de datos
        const results = getCountsResultsXFuntGroup();
        setCountsResults(results);
        setCounted(true);
      };

      const handleSubmit = () => {
        const imagesResults = [countsResult];
        //const unit = 
        navigate('/data_report', {
        state: {
            imagesResults,
        },
        });
      }
      
      // Use un efecto para calcular la suma cuando countsResult se actualiza
      useEffect(() => {
        if (countsResult) {
          let total = 0;
          Object.keys(countsResult).forEach((funtGroup) => {
            const results = countsResult[funtGroup];
            const suma = results.reduce((prev, elemento) => prev + elemento.count, 0);
            total += suma;
          });
          setSumaTotal(total);
        }
      }, [countsResult]);

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
    <Box display={'flex'} mt={'80px'} mx={'auto'} alignContent={'center'} justifyContent={'center'} textAlign={'center'} >
        <Box width={'65%'}>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="image-upload"
                onChange={handleImageUpload}
            />
            <label htmlFor="image-upload">
                <Button variant="contained" component="span" size='large' sx={{bgcolor:'#002060'}}>
                    Subir imagen
                </Button>
            </label>
            {(
                selectedImage && 
                (
                <Box width={'100%'} maxHeight={'700px'} border={'1px solid grey'} marginY={'20px'} bgcolor={'lightgray'} overflow={'auto'}>
                    <Typography variant='h1' fontSize={'30px'} my={'10px'}>Imagen</Typography>
                    <Divider variant='middle' sx={{bgcolor:'black', my:'10px'}}></Divider>
                    <img src={selectedImage} alt="Imagen seleccionada" width={'100%'} height={'100%'}/>
                </Box>
                )
            ) 
            ||
            (
                <Box width={'100%'} height={'700px'} border={'1px solid black'} borderRadius={'20px'} marginY={'20px'} bgcolor={'lightgray'}>
                    <Typography variant='h1' fontSize={'30px'} my={'10px'}>Imagen</Typography>
                    <Divider variant='middle' sx={{bgcolor:'black', my:'10px'}}></Divider>
                </Box>
            )} 
            <Button onClick={handleSubmit} variant="contained" component="span" size='large' disabled = {!counted} sx={{bgcolor:'#002060'}}>
                Generar informe
            </Button>
            
        </Box>

        <Box width={'3%'}></Box>

        <Box width={'25%'}>
            <Button variant="contained" component="span" size='large' disabled= {selectedImage == null} onClick={handleMakeCount} sx={{bgcolor:'#002060'}}>
                Realizar conteo
            </Button>
            {
                (
                    
                    (countsResult !=null) && 
                    (
                    <>
                    <Box width={'100%'} maxHeight={'700px'} border={'1px solid grey'} borderRadius={'20px'} marginY={'20px'} bgcolor={'lightgray'} overflow={'auto'}>
                        <Typography variant='h1' fontSize={'30px'} my={'10px'}>Resultados</Typography>
                        <Divider variant='middle' sx={{bgcolor:'black', my:'10px'}}></Divider>
                        {Object.keys(countsResult).map((funtGroup) => (
                            <ShowResults funtGroup={funtGroup} count={countsResult[funtGroup]} key={funtGroup}/>
                        ))}                        
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} border={'1px solid black'} width={'95%'} minWidth={'210px'} borderRadius={'10px'} alignContent={'center'} m={'auto'} bgcolor={'#002060'} color={'white'}>
                        <Typography m={'10px 10% 10px 10% '} variant='h3' fontSize={'25px'}><b>Total de colonias:</b></Typography>
                        <Typography m={'10px 10% 10px 0'} variant='h3' fontSize={'25px'}><b>{sumaTotal}</b></Typography>
                    </Box>
                    </>
                    
                    )
                ) 
                ||
                (
                    <Box width={'100%'} height={'700px'} border={'1px solid black'} borderRadius={'20px'} marginY={'20px'} bgcolor={'lightgray'}>
                        <Typography variant='h1' fontSize={'30px'} my={'10px'}>Resultados</Typography>
                        <Divider variant='middle' sx={{bgcolor:'black', my:'10px'}}></Divider>
                    </Box>
                )
            } 
        </Box>
    </Box>
  )
}
