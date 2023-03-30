import styles from "./table.module.css";



import registro from "../../assets/img/editar.png";
import finanzas from "../../assets/img/barras.png";
import contable from "../../assets/img/contable.png";
import costos from "../../assets/img/costo.png";
import reporte from "../../assets/img/reporte.png";
import comercial from "../../assets/img/ventas.png";


const Table = () => {
    return (
       <div className={styles["main-content"]}>

      <div className={styles["title"]}>
        <h1>Sistema Contable</h1>
        </div>
        
        <div className={styles["box-buttons"]}>
          
            <a className={styles["button"]} href="./registros">
              <img src={registro} alt="Registros"></img>Registros</a>
          
            <a className={styles["button"]} href="./finanazas">
            <img src={finanzas} alt="Finanzas" ></img>
              Finanzas</a>
            <a className={styles["button"]} href="./contable">
            <img src={contable} alt="Contable"></img>Contable</a>
            <a className={styles["button"]} href="./costos">
              <img src={costos} alt="Costos" ></img>Costos</a>
            <a className={styles["button"]} href="./reportes">
            <img src={reporte} alt="Reportes" ></img>Reportes</a>
            <a className={styles["button"]} href="./comercial">
              <img src={comercial} alt="Comercial"></img>Comercial</a>
          </div>
          </div> 
        
    )
}

export default Table;