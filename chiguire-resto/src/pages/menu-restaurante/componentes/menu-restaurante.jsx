import styles from '../componente-menu-restaurante.module.css';
import ImagenParaComenzar from '../../../Galeria-Recursos/Nuestra-Carta/para-comenzar.jpg'
import ImagenLosPrincipales from '../../../Galeria-Recursos/Nuestra-Carta/plato-principal.jpg'
import ImagenPostres from '../../../Galeria-Recursos/Nuestra-Carta/postres.jpg'

function MenuRestaurante() {

    const elementosParaComenzar = [{
        nombre: 'TEQUEÑOS DE QUESO',
        descripcion: 'Palito relleno de queso Venezolano',
        precio: 3.5,
    }, {
        nombre: 'PASTELITO CON RELLENO A ELECCION',
        descripcion: 'Mini pastel con una proteína a tu elección',
        precio: 4,
    }, {
        nombre: 'BOLITAS DE CARNE',
        descripcion: 'Pequeñas bolitas de carne fritas',
        precio: 3,
    }]

    const elementosPrincipales = [{
        nombre: 'PABELLON',
        descripcion: 'Plato tradicional con arroz, tajada, carne mechada, y caraota',
        precio: 12,
    }, {
        nombre: 'CACHAPA',
        descripcion: 'Plato a base de maíz con queso de mano y proteina a elección',
        precio: 10,
    }, {
        nombre: 'PEPITO',
        descripcion: '3 proteínas, cebolla, lechuga, tomate, patatas paja, jamón, maíz, salsas, bacon, huevo y queso gouda',
        precio: 12.5,
    }]

    const elementosPostres = [{
        nombre: 'TARTA 3 LECHES',
        descripcion: 'Bizcocho bañado con leche evaporada, media crema y condensada',
        precio: 5,
    }, {
        nombre: 'BROWNIE',
        descripcion: 'Con bizcocho de chocolate y topping de chocolate y vainilla',
        precio: 4,
    }, {
        nombre: 'CAKE ROLL',
        descripcion: 'Bizcocho enrollado relleno de nata montada, mermelada, glaseado o cualquier tipo de relleno',
        precio: 5,
    }]

    const contenedorParaComenzar = elementosParaComenzar.map((item, index) =>
        <div className={styles['contenedor-entrantes']} key={index}>
            <p className={styles['parrafo-para-comenzar']}>
                {item.nombre}<i className="bi bi-caret-right"></i> {item.precio}€
            </p>
            <small className={styles['descripcion-para-comenzar']}>
                {item.descripcion}
            </small>
        </div>
    );

    const contenedorPrincipales = elementosPrincipales.map((item, index) =>
        <div className={styles['contenedor-principales']} key={index}>
            <p className={styles['parrafo-principales']}>
                {item.nombre}<i className="bi bi-caret-right"></i> {item.precio}€
            </p>
            <small className={styles['descripcion-principales']}>
                {item.descripcion}
            </small>
        </div>
    );

    const contenedorPostres = elementosPostres.map((item, index) =>
        <div className={styles['contenedor-postres']} key={index}>
            <p className={styles['parrafo-postres']}>
                {item.nombre}<i className="bi bi-caret-right"></i> {item.precio}€
            </p>
            <small className={styles['descripcion-postres']}>
                {item.descripcion}
            </small>
        </div>
    );

    return <>
        <div className='container-fluid'>

            <div className='row mb-md-5'>

                <div className='col-sm-12 col-md-6'>

                    <div className={styles['contenedor-menu-para-comenzar']}>

                        <div className={styles['contenedor-titulo-para-comenzar']}>
                            <small>El inicio perfecto para tu comida</small>
                            <h3>PARA COMENZAR</h3>
                        </div>

                        <div className={styles['contenedor-lista-para-comenzar']}>
                            {contenedorParaComenzar}
                        </div>

                    </div>

                </div>

                <div className={`col-sm-12 col-md-6 ${styles.posicionamientoImagenParaComenzar}`}>
                    <div className={styles['contenedor-menu-para-comenzar-imagen']}>
                        <img className={styles['imagen-carta']} src={ImagenParaComenzar} alt="para-comenzar-imagen" />
                    </div>
                </div>

            </div>

            <div className={`row mb-md-5 ${styles.contenedorControlPosicion}`}>

                <div className={`col-sm-12 col-md-6 ${styles.posicionamientoImagenLosPrincipales}`}> 
                    <div className={styles['contenedor-menu-los-principales-imagen']}>
                        <img className={styles['imagen-carta']} src={ImagenLosPrincipales} alt="los-principales-imagen" />
                    </div>
                </div>

                <div className='col-sm-12 col-md-6'>

                    <div className={styles['contenedor-menu-los-principales']}>
                        <small>Descubre el placer de la comida</small>
                        <h3>LOS PRINCIPALES</h3>
                    </div>

                    <div className={styles['contenedor-lista-los-principales']}>
                        {contenedorPrincipales}
                    </div>

                </div>

            </div>

            <div className='row'>

                <div className='col-sm-12 col-md-6'>

                    <div className={styles['contenedor-menu-postres']}>
                        <small>Algo dulce y nuestro</small>
                        <h3>POSTRES</h3>
                    </div>

                    <div className={styles['contenedor-lista-postres']}>
                        {contenedorPostres}
                    </div>

                </div>

                <div className={`col-sm-12 col-md-6 ${styles.posicionamientoImagenPostres}`}>

                    <div className={styles['contenedor-menu-postres-imagen']}>
                        <img className={styles['imagen-carta']} src={ImagenPostres} alt="postres-imagen" />
                    </div>

                </div>

            </div>
        </div>
    </>
}

export default MenuRestaurante;