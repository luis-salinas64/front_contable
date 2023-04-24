import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const MyContainer = styled(Container)({
    // backgroundColor: '#C4E0E5',
    position: 'absolute',
    // height: '720px',
    top: '101px',
    left: '171px',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 0,

});

const MyForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',

});

const MyRow = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
});

const MyField = styled(TextField)({
    width: "500px",
    margin: '12px',
    marginLeft: '12px',
    borderRadius: '4px',

    '& .MuiInputBase-input': {
        padding: '5px',
        backgroundColor: 'whitesmoke',

    },
});


const MyButtonRow = styled(MyRow)({
    marginTop: '15px',
    marginBottom: '20px',
    justifyContent: 'center',

});

const MySubmitButton = styled(Button)({
    marginRight: '16px',
    textDecoration: 'none',
});

const MyCancelButton = styled(Button)({
    background: 'red',
    textDecoration: 'none',
});


const Categoria = () => {

    const [name, setName] = useState('');
    const [categorias,setCategorias] = useState([]);
    
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



    return (

        <MyContainer>
            <Typography variant="h3" align="center" gutterBottom style={{ borderBottom: '1px solid black' }}>
                Nueva Categoria
            </Typography>

            {/* <MyField size="small" label="Concepto/Descripción" onChange={(e) => setConceptoDescripcion(e.target.value)} /> */}

            <MyForm>
                <MyField
                    size="small"
                    label="Nombre / Descripcion"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    InputLabelProps={{ shrink: true }}
                >
                </MyField>

                {/* <MyField size="small" label="Concepto/Descripción" onChange={(e) => setConceptoDescripcion(e.target.value)} /> */}
                <MyButtonRow>
                    <MySubmitButton variant="contained" color="success" onClick={handleSubmit}>
                        Guardar
                    </MySubmitButton>
                    <MyCancelButton variant="contained" >
                        <a href="/registros">Cancelar</a>
                    </MyCancelButton>
                </MyButtonRow>


            </MyForm>
            <Typography variant="h4" align="center" gutterBottom style={{ borderBottom: '1px solid black' }}>
        Categorías
      </Typography>

      <ul>
        {categorias.map(categoria => (
          <li key={categoria.id}>{categoria.name}</li>
        ))}
      </ul>
        </MyContainer>

    );
};

export default Categoria;