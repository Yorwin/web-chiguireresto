import { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import styles from '../componente-homepage.module.css';

function DescubreNuestraCarta() {
    return <>
        <div className={styles["contenedor-principal-descubre-nuestra-carta"]}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 p-0'>
                        <div className={styles['descubre-nuestra-carta-imagen']}></div>
                    </div>
                    <div className='col-md-6 col-sm-12 p-0'>
                        <div className={styles['descubre-nuestra-carta-letra']}>
                            <h3>DESCUBRE NUESTRA CARTA</h3>
                            <p>Antes de reservar tu mesa, hechale un vistazo a nuestro menú.</p>
                            <Link className={styles["boton-acceder-a-menu"]} to="/menu">Carta</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr className={styles['linea-de-separacion']} />
    </>
}

export default DescubreNuestraCarta;
