import styles from '../group-menu.module.css';

function Menu() {

    const informacionMenuGrupo1 = [{
        nombre: 'Tequeños de Queso',
        descripcion: 'Palitos de queso con masa crujiente hecho al horno, o fritos segun tu gusto.'
    }, {
        nombre: 'Cachapa',
        descripcion: 'Realizada a base de maíz con queso de mano Venezolano jugoso y un toque de mantequilla.'
    }, {
        nombre: 'Tarta 3 Leches',
        descripcion: 'Deliciosa tarta creada a base de 3 lacteos distintos, merengue y cacao en polvo.'
    }, {
        nombre: 'Bebida',
        descripcion: 'Bebida a elección: Coca-cola, Pepsi, Maltin, Zumo (Piña, Mix de Frutas, Papelon), Cerverza.'
    }]

    const informacionMenuGrupo2 = [{
        nombre: 'Pastelitos',
        descripcion: 'Pastelito a base de harina de trigo con relleno de proteina a elección.'
    }, {
        nombre: 'Pepito',
        descripcion: '3 proteínas, cebolla, ensalada, patatas, jamón, maíz, bacon, huevo y queso gouda.'
    }, {
        nombre: 'Cake Roll',
        descripcion: 'Bizcocho enrollado, relleno de nata montada, mermelada y glaseado.'
    }, {
        nombre: 'Bebida',
        descripcion: 'Bebida a elección: Coca-Cola, Pepsi, Maltin, Zumo (Piña, Mix de Frutas, Papelon), Cerverza.'
    }]

    const contenidoPrimerMenu = informacionMenuGrupo1.map((item, index) => 
        <div className={styles['contenedor-contenido-menu-de-grupos']} key={index}>
            <p className={styles['parrafo-menu-de-grupos']}>{item.nombre}</p>
            <small className={styles['descripcion-menu-de-grupos']}>{item.descripcion}</small>
        </div>
    )

    const contenidoSegundoMenu = informacionMenuGrupo2.map((item, index) => 
        <div className={styles['contenedor-contenido-menu-de-grupos']} key={index}>
            <p className={styles['parrafo-menu-de-grupos']}>{item.nombre}</p>
            <small className={styles['descripcion-menu-de-grupos']}>{item.descripcion}</small>
        </div>
    )

    return <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 d-flex justify-content-center'>
                    <div className={styles['contenedor-menu']}>
                        <h4>Menu 1</h4>
                        {contenidoPrimerMenu}
                        <small className={styles['precio-contenedor-menu-grupo']}>18€ P.P</small>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 d-flex justify-content-center'>
                    <div className={styles['contenedor-menu']}>
                        <h4>Menu 2</h4>
                        {contenidoSegundoMenu}
                        <small className={styles['precio-contenedor-menu-grupo']}>20€ P.P</small>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Menu;