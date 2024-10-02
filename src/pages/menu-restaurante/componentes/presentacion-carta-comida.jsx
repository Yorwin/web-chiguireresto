import styles from '../componente-menu-restaurante.module.css';

function PresentacionCarta() {
    return <>
        <div className={styles['contenedor-principal-presentacion-carta']}>
            <h1 className={styles['titulo-presentacion-carta']}>Carta Comida</h1>
            <div className={styles['contenedor-parrafo-presentacion-carta']}>
                <p className={styles['parrafo-presentacion-carta']}>
                    Te ofrecemos una carta llena de variedad para que tengas una comida completa y llena de sabor y así pases
                    una bonita experiencia acompañada de la mejor atención.
                </p>
            </div>
        </div>
    </>
}

export default PresentacionCarta;