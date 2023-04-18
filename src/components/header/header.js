import React, { useState, useEffect } from 'react';
import styles from "./header.module.css";

import inovelogo from "../../assets/img/inove_logo.png";
import avatar from "../../assets/img/hombre.png";
import salir from "../../assets/img/salir.png"


      
const Header = () => {
    const [fechaHora, setFechaHora] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setFechaHora(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className={styles.header}>
        <img src={inovelogo} alt="Logo" />
        <div className={styles["user-info"]}>
          <span>Sebastian</span>
          
          <img src={avatar} alt="Avatar" />
        </div>
        <div>
        <p>{fechaHora.toLocaleString("es-ES", { dateStyle: "medium" })}</p>  
        </div>
        <div>
        <p>{fechaHora.toLocaleString("es-ES", { timeStyle: "short" })}</p>
        </div>
        
        
      </div>
    )
  }
  
  export default Header;

