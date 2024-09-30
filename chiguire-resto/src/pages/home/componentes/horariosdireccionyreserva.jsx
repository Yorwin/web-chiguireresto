import styles from '../componente-homepage.module.css';

function HorariosDireccionYReservas() {
    return <>
        <section className={styles['contenedor-principal-info-visita']}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-5 col-sm-12'>
                        <div className={styles['contenedor-info-visita-texto']}>
                            <div className={styles['info-titulo-y-direccion']}>
                                <div className={styles['info-titulo-container']}>
                                    <h3>VEN A DISFRUTAR</h3>
                                    <h3>DE SABORES UNICOS</h3>
                                </div>
                                <div className={styles['info-direccion-container']}>
                                    <small>C/ de Lluis de Santàngel, 20, L'Eixample, 46005, Valéncia.</small>
                                </div>
                            </div>
                            <div className={styles['contenedor-info-horario-telf']}>
                                <ul>
                                    <li>
                                        <i className="bi bi-clock"></i>
                                        <div className={styles['contenedor-texto-reserva']}>
                                            <small>Martes a Sabado</small>
                                            <small>13:30-16:00|20:00-23:00</small>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="bi bi-telephone"></i>
                                        <div className={styles['contenedor-texto-reserva']}>
                                            <a href="#">
                                                <small>Reservas</small>
                                                <small>687253728</small>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 col-sm-12'>
                        <div className={styles['info-visita-imagen-container']}>
                            <div className={styles['info-visita-imagen']}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default HorariosDireccionYReservas;