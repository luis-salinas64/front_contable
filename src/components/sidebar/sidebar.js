import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-container"]}>
      <div className={styles["sidebar-header"]}>
        <span>Menu</span>
      </div>
      <ul>
        <li className={styles.title}><a href="/registros">Registros</a></li>
        <li>
          <ul>
            <li><a href="/ingresos">Ingresos</a></li>
            <li><a href="/egresos">Egresos</a></li>
            <li><a href="/ventas">Ventas</a></li>
            <li><a href="/compras">Compras</a></li>
            <li><a href="/ajustes">Ajustes</a></li>
            <li><a href="/ncredito">N Credito</a></li>
            <li><a href="/ndebito">N Debito</a></li>
            <li><a href="/cuentas">A-B-M Cuentas</a></li>

          </ul>
        </li>
        <li className={styles.title}>Finanzas</li>
        <li>
          <ul>
            <li><a href="#">Disponibilidad</a></li>
            <li><a href="#">Comparativa Mensual</a></li>
            <li><a href="#">Proyecciones</a></li>
            <li><a href="#">Cash - Flow</a></li>
            <li><a href="#">Analisis Financiero</a></li>
          </ul>
        </li>
        <li className={styles.title}>Contable</li>
        <li>
          <ul>
            <li><a href="#">Situacion IVA</a></li>
            <li><a href="#">Estado de Resultados</a></li>
            <li><a href="#">Listados</a></li>
          </ul>
        </li>
        <li className={styles.title}>Costos</li>
        <li>
          <ul>
            <li><a href="#">Analisis de Costos</a></li>
          </ul>          
        </li>
        <li className={styles.title}>Reportes</li>
        <li>
          <ul>
            <li><a href="#">Cuentas</a></li>
            <li><a href="#">Listado de vencimientos</a></li>
            <li><a href="#">Listado de cuotas vencidas</a></li>
          </ul>
        </li>
        <li className={styles.title}>Comercial</li>
        <li>
          <ul>
            <li><a href="#">Proyeccion Cursos</a></li>
            <li><a href="#">Ranking Cursos</a></li>
            <li><a href="#">Campañas</a></li>
            <li><a href="#">Alta Venta Curso</a></li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
