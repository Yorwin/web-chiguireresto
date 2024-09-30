import styles from './componente-menu.module.css';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState, useContext } from 'react';
import contextoMenu from '../contexto/contexto-menu';

function Menu({ contenedorPrincipal, header }) {

    // Crear una referencia al elemento canvas y nav

    const contenedorMenuRef = useRef(null);
    const contenedor = contenedorPrincipal.current;
    const headerElemento = header.current;

    //Mostrar y Ocultar Menu. 

    const [transform, setTransform] = useState({ x: 0, y: 0 });
    const { estadoEscalado, setEstadoEscalado } = useContext(contextoMenu);

    function mostrarYOcultarMenu() {

        const contenedorMenu = contenedorMenuRef.current;

        if (contenedorMenu) {
            if (estadoEscalado) {
                setTimeout(() => {
                    contenedorMenu.classList.remove("d-none");
                    actualizarPosicion();
                }, 500);
            } else {
                contenedorMenu.classList.add("d-none");
            }
        }
    }

    useEffect(() => {
        mostrarYOcultarMenu();
    }, [estadoEscalado]);


    //Configuración posicionamiento Menu. 

    const actualizarPosicion = () => {
        const contenedor = contenedorPrincipal.current;
        const contenedorMenu = contenedorMenuRef.current;

        if (contenedor && contenedorMenu) {
            const contenedorRect = contenedor.getBoundingClientRect();
            const menuRect = contenedorMenu.getBoundingClientRect();

            const newX = contenedorRect.right + 45; // Ajustar X para que el contenedor se alinee con el borde derecho
            const newY = contenedorRect.top + (contenedorRect.height / 2) - (menuRect.height / 2); // Centrar verticalmente

            setTransform({ x: newX, y: newY })
        }
    }

    //Ajustando la posición dinamicamente cuando cambian las dimensiones de la ventana del navegador.  

    useEffect(() => {
        actualizarPosicion();
        window.addEventListener('resize', actualizarPosicion);

        return () => {
            window.removeEventListener('resize', actualizarPosicion);
        };
    }, [contenedorPrincipal])

    //Manejando la posición del Header después de haber pulsado sobre una opción del menú.

    const actualizarPosicionHeader = () => {
        const contenedor = contenedorPrincipal.current;
        const offsetY = window.scrollY;

        // Solo actualizar la posición si el contenedor no está escalado
        if (contenedor.classList.contains('zoom-in')) {
            headerElemento.style.top = `${offsetY}px`;
        }
    }

    // Alternando la clase CSS del escalado desde el Menu. 

    const manejarClickElementoMenu = () => {
        if (estadoEscalado) {
            contenedor.classList.remove("zoom-out");
            contenedor.classList.add("zoom-in");
            actualizarPosicionHeader();
            setEstadoEscalado(!estadoEscalado);
        } 
    }

    return <>
        <div className={styles["contenedor-menu"]} ref={contenedorMenuRef} style={{
            transform: `translate(${transform.x}px, ${transform.y}px)`,
            position: 'absolute',
            zIndex: 1000,
        }}>
            <nav>
                <ul className={styles["lista-menu"]}>
                    <li onClick={manejarClickElementoMenu}><Link to="/">El Chiguire Resto</Link></li>
                    <li onClick={manejarClickElementoMenu}><Link to="/reservar">Reservar</Link></li>
                    <li onClick={manejarClickElementoMenu}><Link to="/menu">Menu</Link></li>
                    <li onClick={manejarClickElementoMenu}><Link to="/menus-de-grupos">Menus de Grupos</Link></li>
                    <li onClick={manejarClickElementoMenu}><Link to="/platos-estrella">Platos Estrella</Link></li>
                </ul>
            </nav>
        </div>
    </>
}

export default Menu;