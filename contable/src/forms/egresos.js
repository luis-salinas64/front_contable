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


const Egresos = () => {
  const [numComprobante, setNumComprobante] = useState(1);
  const [fecha, setFecha] = useState(null);
  const [categoriaCuenta, setCategoriaCuenta] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [importe, setImporte] = useState('0.00');
  const [conceptoDescripcion, setConceptoDescripcion] = useState('');

  const handleFechaChange = (date) => {
    setFecha(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNumComprobante(numComprobante + 1);
  };

  const handleImporteChange = (e) => {
    const value = e.target.value;
    const formattedValue = parseFloat(value);
    const hasTwoDecimals = /^\d+(\.\d{1,2})?$/.test(value);
    if (!hasTwoDecimals) {
      setImporte(formattedValue.toFixed(2));
    } else {
      setImporte(formattedValue.toString());
    }
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MyContainer>
        <Typography variant="h3" align="center" gutterBottom style={{ borderBottom: '1px solid black' }}>
          Egresos
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
          <MySubtitle variant="h5">Destino del Egreso</MySubtitle>
          
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
            <option value="opcion1">Desarrollo</option>
            <option value="opcion2">Comercial</option>
            <option value="opcion3">Inversiones</option>
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
              <option value="opcion1">Luis Salinas</option>
              <option value="opcion2">Sebastian</option>
              <option value="opcion3">Facebook</option>
            </MyField>

            <MyCrearButton variant="contained" color="success">
              + Crear
            </MyCrearButton>

          </MyRow>
          <MyField size="small" label="Monto que ingresa" type="number"
            inputMode="decimal" step="0.01" required />

          

          <MyField size="small" label="Concepto/Descripción" />

          <MySubtitle variant="h5">Origen de los Fondos</MySubtitle>
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
            <option value="opcion1">Disponibilidades</option>
            <option value="opcion2">Opcion2</option>
            <option value="opcion3">Opcion3</option>
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
              <option value="opcion1">Caja</option>
              <option value="opcion2">Banco Frances</option>
              <option value="opcion3">Mercado de Pago</option>

            </MyField>
            <MyCrearButton variant="contained" color="success">
              + Crear
            </MyCrearButton>
          </MyRow>
          {/* <MyField size="small" label="Importe" style={{ marginLeft: '0px' }} /> */}
          <MyField size="small" label="Importe" type="number"
            inputMode="decimal" step="0.01" />
            <MyField size="small" label="Nro.Operacion Banco" />
          <MyField size="small" label="Concepto/Descripción" />
          <MyButtonRow>
            <MySubmitButton variant="contained" color="success">
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

export default Egresos;