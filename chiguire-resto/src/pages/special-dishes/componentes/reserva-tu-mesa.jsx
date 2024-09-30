import styles from '../special-dishes.module.css';
import { Link } from 'react-router-dom';

function Reservar() {
    return <>
        <div className={styles['reserva-contenedor-background']}>
            <div className={styles['contenedor-contenido-reserva']}>
                <small>Reserva tu mesa</small>
                <div className={styles['contenedor-boton']}>
                    <Link to="/reservar">
                        <div className={styles['linea-reservar']}></div>
                        Reserva ahora
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default Reservar;