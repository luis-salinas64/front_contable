import styles from "../components/table/table.module.css";



import ingreso from "../assets/img/monedas.png";
import egreso from "../assets/img/pago.png";
import ventas from "../assets/img/ventas.png";
import compras from "../assets/img/compras.png";
import ajustes from "../assets/img/ajustes.png";
import volver from "../assets/img/atras.png";


const Finanzas = () => {
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
          
            <a className={styles["button"]} href="./disponibilidad">
              <img src={ingreso} alt="Disponibilidad"></img>Disponibilidad</a>
          
            <a className={styles["button"]} href="./comparativa">
            <img src={egreso} alt="Comparativas" ></img>Comparativa Mensual</a>

            <a className={styles["button"]} href="./proyecciones">
            <img src={ventas} alt="Proyecciones"></img>Proyecciones</a>

            <a className={styles["button"]} href="./cash">
              <img src={compras} alt="Cash" ></img>Cash - Flow</a>

            <a className={styles["button"]} href="./analisisf">
            <img src={ajustes} alt="AnalisisF" ></img>Analisis Financieros</a>

            
          </div>
          </div> 
        
    )
}

export default Finanzas;