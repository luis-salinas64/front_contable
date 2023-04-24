import styles from "../components/table/table.module.css";



import ingreso from "../assets/img/monedas.png";
import egreso from "../assets/img/pago.png";
import ventas from "../assets/img/ventas.png";
import compras from "../assets/img/compras.png";
import ajustes from "../assets/img/ajustes.png";
import abm from "../assets/img/editar.png";
import volver from "../assets/img/atras.png";


const Registros = () => {
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
          
            <a className={styles["button"]} href="./ingresos">
              <img src={ingreso} alt="Ingresos"></img>Ingresos</a>
          
            <a className={styles["button"]} href="./egresos">
            <img src={egreso} alt="Egresos" ></img>Egresos</a>

            <a className={styles["button"]} href="./ventas">
            <img src={ventas} alt="Ventas"></img>Ventas</a>

            <a className={styles["button"]} href="./compras">
              <img src={compras} alt="Compras" ></img>Compras</a>

            <a className={styles["button"]} href="./ajustes">
            <img src={ajustes} alt="Ajustes" ></img>Ajustes</a>

            <a className={styles["button"]} href="./categoria">
              <img src={abm} alt="ABMCuentas"></img>A-B-M Cuentas</a>
          </div>
          </div> 
        
    )
}

export default Registros;