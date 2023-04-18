import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const MyContainer = styled(Container)({
  backgroundColor: '#C4E0E5', 
  position:'absolute',
  height:'720px',
  top:'101px',
  left:'171px',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  margin:0,
  
});

const MyForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  
});

const MyRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

const MyField = styled(TextField)({
  margin: '12px',
  '& .MuiInputBase-input': {
    padding: '10px',
    backgroundColor: '#FFFFFF',
  },
});

const MyFormControl = styled(FormControl)({
  margin: '8px',
});

const MyInputLabel = styled(InputLabel)({
  marginRight: '8px',
});

const MyButtonRow = styled(MyRow)({
  marginTop: '32px',
  justifyContent: 'center',
});

const MySubmitButton = styled(Button)({
  marginRight: '16px',
});
const MyDatePicker = styled(DatePicker)({
  margin: '12px',
  '& .MuiInputBase-input': {
    padding: '10px',
    backgroundColor: '#FFFFFF',
    fontSize: '16px',
    width: '200px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.1)',
  },
});

const Ingresos = () => {
  const [numComprobante, setNumComprobante] = useState(1);
  const [fecha, setFecha] = useState(null);
  const [categoriaCuenta, setCategoriaCuenta] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [importe, setImporte] = useState(0.0);
  const [conceptoDescripcion, setConceptoDescripcion] = useState('');

  const handleFechaChange = (date) => {
    setFecha(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNumComprobante(numComprobante + 1);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MyContainer>
      <Typography variant="h3" align="center" gutterBottom style={{borderBottom:'1px solid black'}}>
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
          <MyField size="medium" label="Número de comprobante" value={numComprobante} style={{marginLeft: '80px'}} />
        </MyRow>
        <MyField size="small" label="Categoría cuenta" style={{marginLeft: '0px'}} />
        <MyField size="small" label="Cuenta" style={{marginLeft: '0px'}} />
        <MyField size="small" label="Importe" style={{marginLeft: '0px'}} />
        <MyField size="small" label="Concepto/Descripción" style={{marginLeft: '0px'}} />
        <MyField size="small" label="Categoría cuenta" style={{marginLeft: '0px'}} />
        <MyField size="small" label="Cuenta" style={{marginLeft: '0px'}} />
        <MyField size="small" label="Importe" style={{marginLeft: '0px'}} />
        <MyField size="small" label="Concepto/Descripción" style={{marginLeft: '0px'}} />
        <MyButtonRow>
          <MySubmitButton variant="contained" color="success">
            Guardar
          </MySubmitButton>
          <Button variant="contained" color="secondary">
            Cancelar
          </Button>
        </MyButtonRow>
     

      </MyForm>
    </MyContainer>
    </LocalizationProvider>
  );
};

export default Ingresos;
