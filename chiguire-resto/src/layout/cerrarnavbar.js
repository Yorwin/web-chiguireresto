import React, { useEffect, useRef, useContext, useState } from 'react';
import styles from './componente-cerrarnavbar.module.css';
import contextoMenu from '../contexto/contexto-menu';

function CerrarNavBar({ contenedorPrincipal }) {

    // Crear una referencia al elemento canvas y nav
    const canvasRef = useRef(null);
    const navRef = useRef(null);

    //Dibujar Canvas 

    useEffect(() => {

        const canvas = canvasRef.current;

        if (canvas) {
            const cxt = canvas.getContext("2d");

            if (cxt) {

                cxt.clearRect(0, 0, canvas.width, canvas.height);

                cxt.shadowColor = 'rgba(0, 0, 0, 0)';

                const offset = 10;

                cxt.beginPath();
                cxt.moveTo(40 - offset, 40 - offset);
                cxt.lineTo(40 + offset, 40 + offset);
                cxt.moveTo(40 + offset, 40 - offset);
                cxt.lineTo(40 - offset, 40 + offset);
                cxt.strokeStyle = '#FFFFFF';
                cxt.lineWidth = 5;
                cxt.stroke();
                cxt.closePath();
            }
        }
    }, []);

    //Mostrar y Ocultar Icono de Canvas. 

    const [transform, setTransform] = useState({ x: 0, y: 0 });
    const { estadoEscalado, setEstadoEscalado } = useContext(contextoMenu);

    useEffect(() => {

        const navBar = navRef.current;

        if (navBar) {
            if (estadoEscalado) {
                setTimeout(() => {
                    navBar.removeAttribute("class");
                    actualizarPosicion();
                }, 500);
            } else {
                navBar.setAttribute("class", "d-none");
            }
        }

    }, [estadoEscalado]);


    //Cerrar menu de navegación con Canvas. 

    const CerrarMenuNavegacion = () => {
        const contenedor = contenedorPrincipal.current;

        // Capturar la posición actual del scroll del contenedor
        const scrollActual = contenedor ? contenedor.scrollTop : 0;

        if (contenedor) {
            if (estadoEscalado) {
                // Aplicar las clases para escalar
                contenedor.classList.remove("zoom-out");
                contenedor.style.overflow = 'hidden';
                contenedor.classList.add("zoom-in");

                setTimeout(() => {
                    contenedor.style.overflow = '';
                    window.scrollTo(0, scrollActual) // Restaura la posición del scroll
                }, 500);
            }

            // Alternar el estado global
            setEstadoEscalado(!estadoEscalado);
        }
    };

    //Configuración posicionamiento Canvas. 

    const actualizarPosicion = () => {
        const contenedor = contenedorPrincipal.current;
        const navBar = navRef.current;

        if (contenedor && navBar) {
            const contenedorRect = contenedor.getBoundingClientRect();
            const navBarRect = navBar.getBoundingClientRect();

            const newX = contenedorRect.right; // Ajustar X para que el contenedor se alinee con el borde derecho
            const newY = contenedorRect.top + (contenedorRect.height / 2) - (navBarRect.height / 2); // Centrar verticalmente

            setTransform({ x: newX, y: newY })
        }
    }

    useEffect(() => {
        actualizarPosicion();
        window.addEventListener('resize', actualizarPosicion);

        return () => {
            window.removeEventListener('resize', actualizarPosicion);
        };
    }, [contenedorPrincipal])

    let claseMenu;

    if (estadoEscalado) {
        claseMenu = "mostrar-menu-animacion"
    } else {
        claseMenu = "cerrar-menu-animacion"
    }

    return <>
        <nav className={styles[`contenedor-barra-de-navegacion ${claseMenu}`]} ref={navRef} 
         style={{
            transform: `translate(${transform.x}px, ${transform.y}px)`,
            position: 'absolute',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <canvas
                ref={canvasRef}
                width="80"
                height="80"
                className={styles["contenedor-principal-icono-de-cierre"]}
                onClick={CerrarMenuNavegacion}
            >
                Tu navegador no acepta canvas
            </canvas>
        </nav>
    </>;
};

export default CerrarNavBar;