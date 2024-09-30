import styles from '../group-menu.module.css';

function TextoPrincipal() {
    return <>
        <div className={styles['texto-contenedor-principal']}>
            <div className={styles['contenedor-titulo']}>
                <h1>Menus de Grupos</h1>
            </div>
            <div className={styles['contenedor-texto']}>
                <p>
                    Menu sujeto a disponibilidad, con reserva previa de 24 horas y seña de 10 euros,
                    por persona. Mínimo 8 personas por mesa.
                </p>
            </div>
        </div>
    </>
}

export default TextoPrincipal;