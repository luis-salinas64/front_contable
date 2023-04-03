import styles from "../components/table/table.module.css";
import volver from "../assets/img/atras.png";


const Ingresos = () => {
    return (
       <div className={styles["main-content"]}>

      <div className={styles["title"]}>
        <h1>Sistema Contable</h1>
        
        <h2>---Aqui va el formulario de Ingreso---</h2>

        </div>

        <div className={styles["title"]}>
            <a href="/">
                <img src={volver} alt="Volver"></img></a> 
        </div>

        
            
        
        
          </div> 
        
    )
}

export default Ingresos;