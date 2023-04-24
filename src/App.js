import {Routes, Route,BrowserRouter } from "react-router-dom";

import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Table from "./components/table/table";
import Registros from "./pages/registros";
import Finanzas from "./pages/finanzas";
import Contable from "./pages/contable";
import Reportes from "./pages/reportes";
import Ingresos from "./forms/ingresos";
import Egresos from "./forms/egresos";
import Categoria from "./forms/categoria";

import React from 'react';
import './App.css';



function App() {
  return (
    <div className="container">
      <div>
        <Header/>
      </div>
      
      <div>
        <Sidebar/>
      </div>
      
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table/>}></Route>
          
          <Route path="/registros" element={<Registros/>}></Route>
          
          <Route path="/finanzas" element={<Finanzas/>}></Route>

          <Route path="/contable" element={<Contable/>}></Route>

          <Route path="/reportes" element={<Reportes/>}></Route>

          <Route path="/ingresos" element={<Ingresos/>}></Route>

          <Route path="/egresos" element={<Egresos/>}></Route>

          <Route path="/categoria" element={<Categoria/>}></Route>

        </Routes>
        
        </BrowserRouter>
      </div>
      
</div>      
      
    
  );
}

export default App;
