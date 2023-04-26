import styles from "../components/table/table.module.css";

import edit from "../assets/img/editar.png";
import volver from "../assets/img/atras.png";


const Cuentas = () => {
    return (
       <div className={styles["main-content"]}>

      <div className={styles["title"]}>
        <h1>Sistema Contable</h1>
        </div>
        <div className={styles["title"]}>
            <a href="/registros">
                <img src={volver} alt="Volver"></img></a> 
        </div>
        
        <div className={styles["box-buttons"]}>
          
            <a className={styles["button"]} href="./categoria">
              <img src={edit} alt="Disponibilidad"></img>ABM-Categorias</a>
          
            <a className={styles["button"]} href="./cuenta_pp">
            <img src={edit} alt="Comparativas" ></img>ABM-Cuentas Propias</a>

            <a className={styles["button"]} href="./cuenta3">
            <img src={edit} alt="Proyecciones"></img>ABM-Cuentas Terceros</a>

            
          </div>
          </div> 
        
    )
}

export default Cuentas;