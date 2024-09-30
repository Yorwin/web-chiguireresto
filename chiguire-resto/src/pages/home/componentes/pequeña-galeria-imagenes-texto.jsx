import styles from '../componente-homepage.module.css';
import { useRef, useEffect } from 'react';

function GaleriaDeImagenesYTexto() {

    const claseRecuadrosDeTexto = 'contenedor-galeria-texto';

    const recuadrosTexto = {
        primero: <div className={styles[`${claseRecuadrosDeTexto}`]}>
            <h3>Ingredientes de Calidad</h3>
            <p>Ingredientes que garantizan calidad.</p>
        </div>,
        segundo: <div className={styles[`${claseRecuadrosDeTexto}`]}>
            <h3>Sabor Unico</h3>
            <p>Experimenta nuevos sabores deliciosos y diferentes.</p>
        </div>,
        tercero: <div className={styles[`${claseRecuadrosDeTexto}`]}>
            <h3>Experiencia Completa</h3>
            <p>Sientete en Venezuela probando nuestros platos. </p>
        </div>,
        cuarto: <div className={styles[`${claseRecuadrosDeTexto}`]}>
            <h3>Cocina Tradicional</h3>
            <p>Cada plato preparado a mano y al momento.</p>
        </div>,
        quinto: <div className={styles[`${claseRecuadrosDeTexto}`]}>
            <h3>Atención al Cliente</h3>
            <p>Obten la guía y ayuda de nuestro cualificado personal</p>
        </div>,
    }

    const imagenRefPrimero = useRef(null);
    const imagenRefSegundo = useRef(null);
    const imagenRefTercero = useRef(null);
    const imagenRefCuarto = useRef(null);

    const imagenesGaleria = {
        primero: <div className={`${styles['contenedor-galeria-imagen1']} ${styles['blanco-y-negro-mostrar']}`} ref={imagenRefPrimero}></div>,
        segundo: <div className={`${styles['contenedor-galeria-imagen2']} ${styles['blanco-y-negro-mostrar']}`} ref={imagenRefSegundo}></div>,
        tercero: <div className={`${styles['contenedor-galeria-imagen3']} ${styles['blanco-y-negro-mostrar']}`} ref={imagenRefTercero}></div>,
        cuarto: <div className={`${styles['contenedor-galeria-imagen4']} ${styles['blanco-y-negro-mostrar']}`} ref={imagenRefCuarto}></div>,
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['blanco-y-negro-cerrar']);
                }
            });
        });

        if (imagenRefPrimero.current) observer.observe(imagenRefPrimero.current);
        if (imagenRefSegundo.current) observer.observe(imagenRefSegundo.current);
        if (imagenRefTercero.current) observer.observe(imagenRefTercero.current);
        if (imagenRefCuarto.current) observer.observe(imagenRefCuarto.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return <>
        <section className={styles['contenedor-principal-galeria-imagenes']}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        {recuadrosTexto.primero}
                    </div>
                    <div className='col-md-4 p-0'>
                        {imagenesGaleria.primero}
                    </div>
                    <div className='col-md-4'>
                        {recuadrosTexto.segundo}
                    </div>

                    <div className='col-md-4 p-0'>
                        {imagenesGaleria.segundo}
                    </div>
                    <div className='col-md-4'>
                        {recuadrosTexto.tercero}
                    </div>
                    <div className='col-md-4 p-0'>
                        {imagenesGaleria.tercero}
                    </div>

                    <div className='col-md-4'>
                        {recuadrosTexto.cuarto}
                    </div>
                    <div className='col-md-4 p-0'>
                        {imagenesGaleria.cuarto}
                    </div>
                    <div className='col-md-4'>
                        {recuadrosTexto.quinto}
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default GaleriaDeImagenesYTexto;