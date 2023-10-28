import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery } from '@mui/material';
import { exportTableToPNG } from '../helpers/ExportTableToPNG';
import { useLocation } from 'react-router-dom';

const tableHeadStyle = {
    fontSize:'25px', 
    color:'white', 
    fontFamily:"Times New Roman"
}
const tableCellStyle = {
    fontSize:'17px', 
    fontFamily:"Times New Roman"
}

function TableWithResults() {
    const [unit, setUnit] = useState('');
    const [factor, setFactor] = useState('');
    const [numMuestras, setNumMuestras] = useState(0);

    const isWideScreen = useMediaQuery('(min-width:1500px)');
    const location = useLocation();
    const imagesResults = location.state;

    const [results, setResults] = useState(null);

    // Calcula los resultados en el efecto
    useEffect(() => {
        const updatedResults = {};
        var n = 0;
        var listConteos = imagesResults["imagesResults"];
        if(Array.isArray(listConteos)){
            listConteos.forEach((imageResults) => {
                n += 1;
                Object.keys(imageResults).forEach((functGroup) => {
                    if (!updatedResults[functGroup]) {
                        updatedResults[functGroup] = [];
                    }
                    imageResults[functGroup].forEach((resultgender) => {
                        if (!updatedResults[functGroup].some(
                            (item) => item.gender === resultgender.gender
                        )) {
                            updatedResults[functGroup].push({
                                gender: resultgender.gender, 
                                count: resultgender.count});
                        }
                        else{
                            updatedResults[functGroup].forEach((resgender) =>{
                                if(resgender.gender === resultgender.gender){
                                    resgender.count += resultgender.count;
                                }
                            })
                        }
                    });
                });
            });
            setNumMuestras(n);
            setResults(updatedResults);
        }
    }, [imagesResults]);

    const [functGroup, setFunctGroup] = useState('');
    const [addForm, setAddForm] = useState({
        gender: '',
        count: 0
    });

    const handleChangeFunctGroup = (event) => {
        setFunctGroup(event.target.value);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddForm({
            ...addForm,
            [name]: value,
        });
    };

    const handleChangeUnit = (event) => {
        setUnit(event.target.value);
      };
      const handleChangeFactor = (event) => {
        setFactor(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();

        setResults((prevResults) => {
            // Crea una copia del objeto results
            const updatedResults = { ...prevResults };
        
            // Verifica si el microorganismo ya existe en results, si no, inicialízalo como un arreglo vacío.
            if (!updatedResults[functGroup]) {
              updatedResults[functGroup] = [];
            }
        
            // Verifica si el elemento ya existe en el arreglo
            const exists = updatedResults[functGroup].some(
                (item) =>
                item.gender === addForm.gender);
        
            if (exists) {
                // Muestra un mensaje al usuario
                alert('El microorganismo '+addForm.gender+' ya está contemplado en la lista y no se puede alterar su valor');
            } else {
                // Agrega el nuevo dato al arreglo correspondiente.
                updatedResults[functGroup].push({
                gender: addForm.gender,
                count: parseInt(addForm.count, 10)
                });
            }
        
            return updatedResults;
          });
        setFunctGroup('');
        setAddForm({gender: '', count: 0});
        console.log('Resultados actualizados: ', results);
    };

   const handleExportClick = () => {
    exportTableToPNG('tablaToExport', 'reporte_generado');
  };

  const getCientificNotation = (count) => {
    const aveCount = count/numMuestras;
    const factorMult = 10 ** factor;
    
    const num = aveCount * factorMult;

    const exponente = Math.floor(Math.log10(Math.abs(num)));
    const mantisa = num / Math.pow(10, exponente);
    const notacionCientifica = mantisa.toFixed(2) + " x 10^" + exponente;

    return notacionCientifica;
  }

  return (
    numMuestras > 0?
    (
    <Box display={isWideScreen?'flex':'block'} minWidth={'1500px'} flexWrap={'nowrap'} width={'90%'} alignContent={'center'} mt={'90px'} mx={'auto'} height={'100%'}>
        <Box my={isWideScreen?'0px':'90px'} mr={isWideScreen?'30px':'0px'}>
            <Table id='tablaToExport' sx={{width:'1000px', mx:'auto', border:'1px lightgray solid'}}>
                <TableHead sx={{bgcolor:'#002060'}}>
                    <TableRow>
                        <TableCell align="center" sx={{...tableHeadStyle}}>Grupo</TableCell>
                        <TableCell align="center" sx={{...tableHeadStyle}}>Microorganismo identificado</TableCell>
                        <TableCell align="center" sx={{...tableHeadStyle}}>UFC/{unit}<sup>-1</sup></TableCell>
                        <TableCell align="center" sx={{...tableHeadStyle}}>Observaciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(results).map((funtGroup) => (
                        <>
                        <TableRow key={funtGroup}>
                            <TableCell sx={{fontSize:'25px', fontFamily:"Times New Roman"}}>{funtGroup}</TableCell>
                        </TableRow>
                        {results[funtGroup].map((resultgender) => (
                            <TableRow key={resultgender.gender}>
                                <TableCell></TableCell>
                                <TableCell align="center" sx={{...tableCellStyle}}><em>{resultgender.gender}</em></TableCell>
                                <TableCell align="center" sx={{...tableCellStyle}}>{resultgender.count===0?"NSD":getCientificNotation(resultgender.count)}</TableCell>
                                <TableCell align="center" sx={{...tableCellStyle}}><TextField label='Observación' defaultValue={" "} size='small' multiline></TextField></TableCell>
                            </TableRow>
                        ))}
                        </>
                    ))}   
                </TableBody>
            </Table>
            <Box textAlign={'center'} mt={'30px'}>
                <Button onClick={handleExportClick} sx={{bgcolor:'#002060', fontSize:'20px'}} variant='contained'>Exportar tabla a PNG</Button>
            </Box>
        </Box>
        <Box width={'500px'} mx={'auto'} alignContent={'center'} textAlign={'center'} height={'100%'} my={'auto'} >
            <Box display={'flex'} my={'auto'} justifyContent={'center'} mb={'30px'}>
                <FormControl sx={{width:'200px', mr:'20px'}}>
                    <InputLabel>Unidad de medida</InputLabel>
                    <Select value={unit} label="Unidad de medida" onChange={handleChangeUnit}
                    >
                        <MenuItem value={'ml'}>Mililitros</MenuItem>
                        <MenuItem value={'g'}>Gramos</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{width:'200px', ml:'20px'}}>
                    <InputLabel>Factor de conversion</InputLabel>
                    <Select value={factor} label="Factor de conversion" onChange={handleChangeFactor}
                    >
                        <MenuItem value={1}>10<sup>1</sup></MenuItem>
                        <MenuItem value={2}>10<sup>2</sup></MenuItem>
                        <MenuItem value={3}>10<sup>3</sup></MenuItem>
                        <MenuItem value={4}>10<sup>4</sup></MenuItem>
                        <MenuItem value={5}>10<sup>5</sup></MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box border={'1px #002060 solid'}  borderRadius={'15px'} padding={'20px'} >
                <Typography variant='h2' fontSize={'20px'} mb={'15px'}><b>Agregar microorganismo al reporte</b></Typography>
                <form onSubmit={handleSubmit}>
                    <FormControl fullWidth margin="normal" sx={{my:'25px'}} >
                        <InputLabel>Grupo funcional</InputLabel>
                        <Select
                            label="Grupo funcional"
                            value={functGroup}
                            onChange={handleChangeFunctGroup}  
                        >
                            <MenuItem value="Hongo">Hongo</MenuItem>
                            <MenuItem value="Pseudohongo">Pseudohongo</MenuItem>
                            <MenuItem value="Bacteria anaeróbica">Bacteria anaeróbica</MenuItem>
                            <MenuItem value="Bacteria aeróbica">Bacteria aeróbica</MenuItem>
                            <MenuItem value="Actinomiceto">Actinomiceto</MenuItem>
                        </Select>
                    </FormControl>
                    <Box display={'flex'} justifyContent={'center'} mb={'15px'}>
                        <Box mr={'25px'}><TextField label='Microorganismo' name='gender' value={addForm.gender} onChange={handleChange}></TextField></Box>
                        <Box ml={'25px'}><TextField type='number' label='Cantidad' name='count' value={addForm.count} onChange={handleChange}></TextField></Box>
                    </Box>
                    <Button type="submit" variant='contained' sx={{bgcolor:'#002060'}}>Agregar</Button>
                </form>
            </Box>
        </Box>
    </Box>
    )
    :
    (<Box textAlign={'center'} m={'300px'}>
        <Typography variant='h1' fontSize={'30px'}>Ninguna imagen fue seleccionada para el conteo</Typography>
    </Box> )
  );
}

export default TableWithResults;
