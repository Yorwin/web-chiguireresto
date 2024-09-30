import { Link } from 'react-router-dom';
import styles from '../group-menu.module.css';

function BotonReserva() {
    return <>
        <div className={styles['contenedor-boton-reserva']}>
                <Link className={styles['boton-reserva']} to="/reservar">
                    Reservar
                </Link>
        </div>
    </>
}

export default BotonReserva;