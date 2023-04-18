import styles from "../components/table/table.module.css";

import info from "../assets/img/info.png";
import volver from "../assets/img/atras.png";
import estados from "../assets/img/estados.png";
import listados from "../assets/img/listados.png";

const Contable = () => {
    return (
       <div className={styles["main-content"]}>

      <div className={styles["title"]}>
        <h1>Sistema Contable</h1>
        </div>
        <div className={styles["title"]}>
            <a href="/">
                <img src={volver} alt="Volver"></img></a> 
        </div>
        
        <div className={styles["box-buttons"]}>
          
            <a className={styles["button"]} href="./iva">
              <img src={info} alt="Iva"></img>Situacion IVA</a>
          
            <a className={styles["button"]} href="./resultados">
            <img src={estados} alt="Resultados" ></img>Estado de Resultados</a>

            <a className={styles["button"]} href="./listados">
            <img src={listados} alt="Listados"></img>Listados</a>

            
          </div>
          </div> 
        
    )
}

export default Contable;