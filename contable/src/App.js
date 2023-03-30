
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Table from "./components/table/table";

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
        <Table/>
      </div>
      
</div>      
      
    
  );
}

export default App;
