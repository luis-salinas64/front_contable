import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './categoria.module.css';


const Cuentapp = () => {

  const [name, setName] = useState('');
  const [categorias, setCategorias] = useState([]);

  const obtenerCategorias = () => {
    fetch("http://localhost:8000/api/v1.0/registros/crud/categoria/")
      .then(response => response.json())
      .then(data => {
        setCategorias(data);
      })
      .catch(error => {
        console.error("Error en la petición:", error);
      });
  };
  useEffect(() => {
    obtenerCategorias();
  }, []);



  const guardarDatos = () => {
    const datos = {
      name: name
    };

    console.log(datos);

    fetch("http://localhost:8000/api/v1.0/registros/crud/categoria/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (response.ok) {
          console.log("Datos guardados correctamente en la base de datos", datos);
          setName(""); // Actualiza el estado de 'name' a una cadena vacía
          alert("La nueva categoría se ha agregado correctamente.");
          obtenerCategorias();
        } else {
          console.log("Error al guardar los datos en la base de datos", datos);
        }
      })
      .catch(error => {
        console.error("Error en la petición:", error);
      });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    guardarDatos();
    ;
  };
  const editarCategoria = (id, newName) => {
    const datos = {
      name: newName,
    };

    fetch(`http://localhost:8000/api/v1.0/registros/crud/categoria/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Categoría editada correctamente en la base de datos', datos);
          obtenerCategorias();
        } else {
          console.log('Error al editar la categoría en la base de datos', datos);
        }
      })
      .catch((error) => {
        console.error('Error en la petición:', error);
      });
  };

  const handleEdit = (id) => {
    const newName = prompt('Introduzca el nuevo nombre de la categoría:');
    if (newName) {
      editarCategoria(id, newName);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar esta categoría?')) {
      fetch(`http://localhost:8000/api/v1.0/registros/crud/categoria/${id}/`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            console.log('Categoría eliminada correctamente de la base de datos');
            obtenerCategorias();
          } else {
            console.log('Error al eliminar la categoría de la base de datos');
          }
        })
        .catch((error) => {
          console.error('Error en la petición:', error);
        });
    }
  };

  const categoriasOrdenadas = [...categorias].sort((a, b) => a.name.localeCompare(b.name));

  return (

    <Container className={styles.container}>
      <Typography variant="h4" align="center" gutterBottom style={{ borderBottom: '1px solid black' }}>
        A-B-M Cuentas Propias
      </Typography>      

      <form className={styles.myform}>
        <TextField className={styles.myfield}
          size="small"
          label="Nombre / Descripcion"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
        >
        </TextField>

        
        <div className={styles.mybuttonrow}>
          <Button className={styles.mysubmitbutton} variant="contained" color="primary" onClick={handleSubmit}>
            Guardar
          </Button>
          <Button className={styles.mycancelbutton} variant="contained" color="error" >
            <a href="/cuentas">Cancelar</a>
          </Button>
        </div>
      </form>
      <Typography variant="h4" align="center" gutterBottom style={{ borderBottom: '1px solid black' }}>
        Categorías
      </Typography>

      <div className={styles.myfield}>
        {categoriasOrdenadas.map((categoria) => (
            <div className={styles.listado} key={categoria.id}>
              {categoria.name}
            

            <div className={styles.mydeletebutton}
            onClick={() => handleDelete(categoria.id)}>Eliminar
            </div>

            <div className={styles.myeditbutton}
                onClick={() => handleEdit(categoria.id)}>Editar
            </div>                              
            </div>
        ))}
      
            
      </div>
    </Container >

  );
};

export default Cuentapp;