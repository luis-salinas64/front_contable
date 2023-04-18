import styles from "../components/table/table.module.css";

import cuenta from "../assets/img/cuentas.png";
import vencimiento from "../assets/img/vencimiento.png";
import deuda from "../assets/img/deuda.png";
import volver from "../assets/img/atras.png";


const Reportes = () => {
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
          
            <a className={styles["button"]} href="./movctas">
              <img src={cuenta} alt="MovCtas"></img>Mov Cuentas</a>
          
            <a className={styles["button"]} href="./vencimientos">
            <img src={vencimiento} alt="Vencimientos" ></img>Vencimientos</a>

            <a className={styles["button"]} href="./deudores">
            <img src={deuda} alt="Deudores"></img>Deudores</a>            

            
          </div>
          </div> 
        
    )
}

export default Reportes;