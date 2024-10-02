import React from 'react';
import styles from './componente-header.module.css'
import HamburgerMenu from '../components/hamburger-menu-icon';
import RedesIconos from '../components/redes-sociales-iconos'
import { useState, useContext, useRef, useEffect } from 'react';
import contextoMenu from '../contexto/contexto-menu';
import { Link } from 'react-router-dom';

const Header = React.forwardRef(({ contenedorPrincipal }, ref) => {

    //Gestionando el escalado del menú. 

    const { estadoEscalado, setEstadoEscalado } = useContext(contextoMenu);
    let [escalado, setEscalado] = useState(false);

    //Manteniendo el Header en la parte superior de la página. 

    /* 

    const contenedorHeader = useRef(null);

    const actualizarPosicionHeader = () => {

        const contenedor = contenedorPrincipal.current;
        const scrollActualContenedor = contenedor.scrollTop;

        // Establecer la posición del encabezado para que esté en la parte superior del contenedor
        contenedorHeader.current.style.top = `${scrollActualContenedor}px`;
    }

    const actualizarPosicion = () => {
        const contenedor = contenedorPrincipal.current;
        const offsetY = window.scrollY;

        // Solo actualizar la posición si el contenedor no está escalado
        if (!contenedor.classList.contains('zoom-out')) {
            contenedorHeader.current.style.top = `${offsetY}px`;
        } else if (contenedor.classList.contains('zoom-in')) {
            actualizarPosicionHeader();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', actualizarPosicion);

        return () => {
            window.removeEventListener('scroll', actualizarPosicion);
        };
    }, []);

    */

    // Función para alternar la escala del contenedor.
    const mostrarMenuNavegacion = () => {

        const contenedor = contenedorPrincipal.current;
        const scrollActual = window.scrollY;
        const scrollZoomOut = contenedor ? contenedor.scrollTop : 0;


        // Verificar que la referencia sea válida

        if (contenedor) {

            // Sincronizar el estado local con el global si es necesario
            if (escalado !== estadoEscalado) {
                escalado = estadoEscalado;
            }

            // Alternar la clase CSS en función del estado actual
            if (escalado) {

                contenedor.classList.remove("zoom-out");
                contenedor.classList.add("zoom-in");
                contenedor.style.overflow = 'hidden';

                /* actualizarPosicion();
                actualizarPosicionHeader(); */

                setTimeout(() => {
                    contenedor.style.overflow = '';
                    window.scrollTo(0, scrollZoomOut); //Restaura la posición del scroll
                }, 500)
            } else {
                contenedor.classList.remove("zoom-in");
                contenedor.classList.add("zoom-out");

                //Mantener la posición del Scroll al escalar. 
                setTimeout(() => {
                    contenedor.scrollTop = scrollActual;
                }, 0);
            }

            // Alternar los estados locales y globales
            setEscalado(!escalado);
            setEstadoEscalado(!escalado);
        }
    };

    //Comportamiento Titulo Principal. 

    const moverVentanaHaciaArriba = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return <>

        <div className="container-fluid">
            <div className={styles["header-main-container"]} >

            {/* 
            ref={(node) => {
            contenedorHeader.current = node; //Asigna el ref local. 
            if (typeof ref === 'function') ref(node); //Soporte para refs como funciones.
            else if (ref) ref.current = node; //Soporte para refs como objetos. 
            }} 
             */}

                <div id="contenedor-principal-chiguire-resto" className='row 
                justify-content-md-end
                align-items-center
                w-100'>

                    <div className='col-md-4 
                    col-sm-6
                    offset-md-2 
                    p-0
                    w-sm-50'>

                        <Link to="/" className={styles['titulo-chiguire-resto-enlace']} onClick={moverVentanaHaciaArriba}>
                            <h1 className={styles["titulo-chiguire-resto"]}>
                                El Chiguire Resto
                            </h1>
                        </Link>

                    </div>

                    <div className='col-md-4 
                    d-md-flex
                    col-sm-6
                    d-sm-flex
                    justify-content-end
                    align-items-center
                    pe-4
                    w-sm-50'>

                        <Link className={styles["reservar-header"]} to="/reservar">Reservar</Link>
                        <RedesIconos Clase={styles["lista-de-iconos-menu"]} />

                        <div className={styles["contenedor-principal-hamburger"]}>
                            <HamburgerMenu OnChange={mostrarMenuNavegacion} isChecked={estadoEscalado}></HamburgerMenu>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </>
});

export default Header;