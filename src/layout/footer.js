import styles from './componente-footer.module.css'
import RedesIconos from '../components/redes-sociales-iconos'
import Logo from "../Logo/logo.png"
import { Link } from 'react-router-dom';

function Footer() {
    return <>
        <div className="container-fluid">
            <div className={styles["footer-main-container"]}>
                <div className='row'>

                    <div className='col-12 d-flex p-0 justify-content-center'>
                        <img className={styles["logo-footer"]} src={Logo} alt='logo-chiguire'></img>
                    </div>

                    <div className="col-md-4 col-sm-12 p-0">
                        <h5 className={styles["titulo-footer"]}>Siguenos</h5>
                        <RedesIconos Clase={styles["redes-sociales-footer"]} />
                    </div>

                    <div className="col-md-4 col-sm-12 p-0">
                        <h5 className={styles["titulo-footer"]}>Contacto</h5>

                        <h6 className={styles['subtitulos-contacto']}>DEPARTAMENTO DE COMPRAS</h6>
                        <p className={styles['email-contacto']}>encargadodecompras@chiguireresto.es</p>

                        <h6 className={styles['subtitulos-contacto']}>DEPARTAMENTO DE MARKETING</h6>
                        <p className={styles['email-contacto']}>gestión-marketing@chiguireresto.es</p>

                        <h6 className={styles['subtitulos-contacto']}>DEPARTAMENTO DE RRHH</h6>
                        <p className={styles['email-contacto']}>recursoshumanos@chiguireresto.es</p>
                    </div>

                    <div className="col-md-4 col-sm-12 p-0 mb-4">
                        <h5 className={styles["titulo-footer"]}>Legal</h5>
                        <ul className={styles['lista-legal-footer']}>
                            <li>
                                <Link to="/politica-privacidad">Política de Privacidad</Link>
                            </li>
                            <li>
                                <Link to="/cookies">Política de Cookies</Link>
                            </li>
                            <li>
                                <Link to="/aviso-legal">Aviso Legal y Terminos de uso</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Footer;