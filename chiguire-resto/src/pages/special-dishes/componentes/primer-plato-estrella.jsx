import styles from '../special-dishes.module.css';

function PrimerPlatoEstrella() {
    return <>
        <div className={styles['imagen-de-fondo-primer-plato-estrella-contenedor']}>
            <div className={styles['contenedor-texto-primer-plato']}>
                <h1>La Mejor Cachapa</h1>
                <p>Prueba uno de nuestros platos estrella. Queso de mano de calidad y una proteina.</p>
            </div>
        </div>
    </>
}

export default PrimerPlatoEstrella;

