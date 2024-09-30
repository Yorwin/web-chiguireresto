import styles from '../componente-homepage.module.css';

function ImagenPrincipal() {
    return <>
        <div className={styles['imagen-principal-main-container']}>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-12 d-flex justify-content-center align-items-center pe-0 ps-0'>
                        <article className={styles['contenedorImagenPrincipal']}>
                            <div className={`${styles['efectos-transicion']}`}>
                                <small>El Chiguire Resto</small>
                                <p>DESCUBRE EL UNICO SABOR</p>
                            </div>
                            <p className={styles['segundoTexto']}>DE LA COMIDA VENEZOLANA</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ImagenPrincipal;