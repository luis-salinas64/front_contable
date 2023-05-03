import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './categoria.module.css';
import { styled } from '@mui/material/styles';
import axiosInstance from '../api/axios';


const Cuentapp = () => {

  const [name, setName] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [description, setDescription] = useState('');

  const obtenerCategorias = () => {
      axiosInstance.get('categoria/')
      .then(response => {
        setCategorias(response.data);
      })
      .catch(error => {
        console.error("Error en la petición:", error);
      });
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const handleCategoriaChange = (e) => {
    setName(e.target.value);
  }

  
  const categoriasOrdenadas = [...categorias].sort((a, b) => a.name.localeCompare(b.name));

  const MyField = styled(TextField)({
    width: "500px",
    margin: '12px',
    marginLeft: '0px',
    borderRadius: '4px',
  
    '& .MuiInputBase-input': {
      padding: '5px',
      backgroundColor: 'whitesmoke',
  
    },
  });

  const MyCrearButton = styled(Button)({
    height: '28px',
    margin: '14px',
    marginLeft: '50px'
  })

  return (

    <Container className={styles.container}>
      <Typography variant="h4" align="center" gutterBottom style={{ borderBottom: '1px solid black' }}>
        A-B-M Cuentas Propias
      </Typography>

      <form className={styles.myform}>
      <div className={styles.myrow}>
        <MyField
          size="small"
          label="Categoría Cuenta"
          select
          SelectProps={{ native: true }}
          value={name}
          onChange={handleCategoriaChange}
          InputLabelProps={{ shrink: true }}
        >
          <option value="" disabled>Selecciona una categoria</option>

          {categoriasOrdenadas.map((categoria) => (
            <option key={categoria.id} value={categoria.name}>
              {categoria.name}
            </option>
          ))}
        </MyField>

        <MyCrearButton variant="contained" color="success" href='/categoria'>
              + Crear
        </MyCrearButton>

        </div>

        <TextField className={styles.myfield}
          size="small"
          label="Nombre / Descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
        >
        </TextField>

        <div className={styles.mybuttonrow}>
          <Button className={styles.mysubmitbutton} variant="contained" color="primary">
            Guardar
          </Button>
          <Button className={styles.mycancelbutton} variant="contained" color="error" >
            <a href="/cuentas">Cancelar</a>
          </Button>
        </div>
      </form>
      <Typography variant="h4" align="center" gutterBottom style={{ borderBottom: '1px solid black' }}>
        Cuentas
      </Typography>
            
      <div className={styles.myfield}>
        {categoriasOrdenadas.map((categoria) => (
          <div className={styles.listado} key={categoria.id}>
            {categoria.name}

      </div>

      ))}


      </div>
    </Container >

  );
};

export default Cuentapp;