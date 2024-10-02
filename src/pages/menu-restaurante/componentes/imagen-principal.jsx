import styles from '../componente-menu-restaurante.module.css';

function ImagenPrincipal() {
    return <>
        <div className={styles['contenedor-imagen-principal']}>
            <div className={styles['contenedor-titulo-imagen-principal']}>
                <h2 className={styles['titulo-imagen-principal']}> Nuestra Carta </h2>
            </div>
        </div>
    </>
}

export default ImagenPrincipal;