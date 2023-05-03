import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const MyContainer = styled(Container)({  
  position: 'absolute',  
  top: '101px',
  left: '171px',
  display: 'flex',
  flexDirection: 'column',  
  margin: 0,

});

const MyForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',

});

const MyRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  
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

const MyFieldCpte = styled(TextField)({
  width: "170px",
  margin: '12px',
  marginLeft: '380px',
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

const MyDatePicker = styled(DatePicker)({
  margin: '12px',
  '& .MuiInputBase-input': {
    padding: '5px',
    backgroundColor: '#FFFFFF',
    fontSize: '16px',
    width: '180px',
    borderRadius: '4px',
    // border: '1px solid #ced4da',
    boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.1)',

  },
});

const MySubtitle = styled(Typography)({
  marginLeft: '12px',
  marginBottom: '20px',
  borderBottom: '1px solid black',
  paddingBottom: '10px',
  fontWeight: 'bold',
});

const MyCrearButton = styled(Button)({
  height: '28px',
  margin: '14px',
  marginLeft: '50px'
})


const Ingresos = () => {
  const [numComprobante, setNumComprobante] = useState(1);
  const [fecha, setFecha] = useState(null);
  const [categoriaCuenta, setCategoriaCuenta] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [importe, setImporte] = useState('0.00');
  const [conceptoDescripcion, setConceptoDescripcion] = useState('');

  const guardarDatos = () => {
    const datos = {
      fecha: fecha.format('YYYY-MM-DD'),
      categoria_cuenta: categoriaCuenta,
      cuenta: cuenta,
      importe: importe,
      concepto_descripcion: conceptoDescripcion
    };

    console.log(datos)

    fetch('http://localhost:8000/api/ingresos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (response.ok) {
          console.log('Datos guardados correctamente en la base de datos',datos);
        } else {
          console.log('Error al guardar los datos en la base de datos',datos);
        }
      })
      .catch(error => {
        console.error('Error en la petición:', error);
      });
  };
  

  const handleFechaChange = (date) => {
    setFecha(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    guardarDatos();
    ;
  };

  const handleImporteChange = (e) => {
    const value = e.target.value();
     {
      const formattedValue = parseFloat(value);
      const hasTwoDecimals = /^\d+(\.\d{1,2})?$/.test(value);
      if (!hasTwoDecimals) {
        setImporte(formattedValue.toFixed(2));
      } else {
        setImporte(formattedValue.toString());
      }
    }
  };
  


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MyContainer>
        <Typography variant="h3" align="center" gutterBottom style={{ borderBottom: '1px solid black' }}>
          Ingresos
        </Typography>
        <MyForm>
          <MyRow>
            <LocalizationProvider >
              <MyDatePicker
                label="Fecha"
                value={fecha}
                onChange={handleFechaChange}
                renderInput={(params) => <MyField {...params} size="small" />}
              />
            </LocalizationProvider>
            <MyFieldCpte size="medium" label="Número de comprobante" value={numComprobante} style={{ marginLeft: '80px' }}
              disabled={true}
            />


          </MyRow>
          <MySubtitle variant="h5">Detalle del Ingreso</MySubtitle>
          
          <MyField
            size="small"
            label="Categoría cuenta"            
            value={categoriaCuenta}
            onChange={(e) => setCategoriaCuenta(e.target.value)}
            required
            select
            SelectProps={{ native: true }}
            InputLabelProps={{ shrink: true }}
          >
            <option value="" disabled>Selecciona una categoria</option>
            <option value="Disponibilidades">Disponibilidades</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </MyField>

          <MyRow>
            <MyField
              size="small"
              label="Cuenta"
              value={cuenta}
              onChange={(e) => setCuenta(e.target.value)}
              required
              select
              SelectProps={{ native: true }}
              InputLabelProps={{ shrink: true }}
            >
              <option value="" disabled>Seleccione una cuenta</option>
              <option value="Banco Frances">Banco Frances</option>
              <option value="Banco Galicia">Banco Galicia</option>
              <option value="Caja">Caja</option>
            </MyField>

            <MyCrearButton variant="contained" color="success">
              + Crear
            </MyCrearButton>

          </MyRow>
          <MyField size="small" label="Monto que ingresa" type="number"
            inputMode="decimal" step="0.01" required onClick={handleImporteChange}/>

          <MyField size="small" label="Nro. Operacion Banco"/>

          <MyField size="small" label="Concepto/Descripción" onChange={(e) => setConceptoDescripcion(e.target.value)}/>

          <MySubtitle variant="h5">Origen del Ingreso</MySubtitle>
          {/* <MyField size="small" label="Categoría cuenta" style={{ marginLeft: '0px' }} /> */}

          <MyField
            size="small"
            label="Categoría cuenta"
            // style={{ marginLeft: '0px' }}
            value={categoriaCuenta}
            onChange={(e) => setCategoriaCuenta(e.target.value)}
            required
            select
            SelectProps={{ native: true }}
            InputLabelProps={{ shrink: true }}
          >
            <option value="" disabled>Selecciona una categoria</option>
            <option value="Alumnos">Alumnos</option>
            <option value="Profesores">Profesores</option>
            <option value="Ventas">Ventas</option>
          </MyField>
          <MyRow>
            <MyField
              size="small"
              label="Cuenta"
              value={cuenta}
              onChange={(e) => setCuenta(e.target.value)}
              required
              select
              SelectProps={{ native: true }}
              InputLabelProps={{ shrink: true }}
            >
              <option value="" disabled>Seleccione una cuenta</option>
              <option value="Luis Salinas">Luis Salinas</option>
              <option value="Wilson">Wilson</option>
              <option value="El Puntano S.A.">El Puntano S.A.</option>

            </MyField>
            <MyCrearButton variant="contained" color="success">
              + Crear
            </MyCrearButton>
          </MyRow>
          {/* <MyField size="small" label="Importe" style={{ marginLeft: '0px' }} /> */}
          <MyField size="small" label="Importe" type="number"
            inputMode="decimal" step="0.01" onClick={handleImporteChange}/>

          <MyField size="small" label="Concepto/Descripción"onChange={(e) => setConceptoDescripcion(e.target.value)} />
          <MyButtonRow>
            <MySubmitButton variant="contained" color="success" onClick={handleSubmit}>
              Guardar
            </MySubmitButton>
            <MyCancelButton variant="contained" >
              <a href="/registros">Cancelar</a>
            </MyCancelButton>
          </MyButtonRow>


        </MyForm>
      </MyContainer>
    </LocalizationProvider>
  );
};

export default Ingresos;
