import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, InputLabel } from '@mui/material';


export default function RegistrationForm() {
    const [formData, setFormData] = useState({
      fullName: '',
      username: '',
      email: '',
      password: '',
      role: '',
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const validateForm = () => {
      const errors = {};
  
      if (!formData.fullName) {
        errors.fullName = 'El nombre completo es obligatorio';
      }
  
      if (!formData.username) {
        errors.username = 'El nombre de usuario es obligatorio';
      }
  
      if (!formData.email) {
        errors.email = 'El correo electrónico es obligatorio';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = 'El correo electrónico no es válido';
      }
  
      if (!formData.password || formData.password.length < 8) {
        errors.password = 'La contraseña debe tener al menos 8 caracteres';
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        // Aquí puedes enviar los datos del formulario al servidor o realizar la acción deseada.
        console.log('Datos válidos:', formData);
      }
    };
  
    return (
      <Box sx={{width: { xs: '80%', md: '40%' }}} mt={'90px'} mx={'auto'} alignContent={'center'}>
        <form onSubmit={handleSubmit}>
            <TextField
            name="fullName"
            label="Nombre Completo"
            value={formData.fullName}
            onChange={handleChange}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName}
            fullWidth
            margin="normal"
            sx={{my:'25px'}}
            />
    
            <TextField
            name="username"
            label="Nombre de Usuario"
            value={formData.username}
            onChange={handleChange}
            error={Boolean(errors.username)}
            helperText={errors.username}
            fullWidth
            margin="normal"
            sx={{my:'25px'}}
            />
    
            <TextField
            name="email"
            label="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            fullWidth
            margin="normal"
            sx={{my:'25px'}}
            />
    
            <TextField
            name="password"
            type="password"
            label="Contraseña"
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
            fullWidth
            margin="normal"
            sx={{my:'25px'}}
            />
    
            <FormControl fullWidth margin="normal" sx={{my:'25px'}} >
                <InputLabel id="role_input">Rol del usuario</InputLabel>
                <Select
                    name="role"
                    label="Rol del Usuario"
                    value={formData.role}
                    onChange={handleChange}
                    
                >
                    <MenuItem value="Estudiante">Estudiante</MenuItem>
                    <MenuItem value="Administrador">Administrador</MenuItem>
                    <MenuItem value="Encargado">Encargado</MenuItem>
                </Select>
            </FormControl>
            <Box textAlign={'center'}>
                <Button type="submit" variant="contained" color="primary" sx={{my:'25px'}}>
                    Registrarse
                </Button>
            </Box>
            
        </form>
      </Box>
    );
  }  
