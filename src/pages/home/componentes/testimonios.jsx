import styles from '../componente-homepage.module.css'
import imagenComillas from '../../../Galeria-Recursos/Opiniones/quotation.png'
import flecha from '../../../Galeria-Recursos/Opiniones/upload.png'
import { useEffect, useState } from 'react'

function Testimonios() {

    const [testimonioActual, setTestimonioActual] = useState({
        texto: "",
        nombre: "",
        trabajo: ""
    })

    const [indiceActual, setIndiceActual] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const testimonials = [
        {
            name: 'Eva Sawyer',
            job: 'Comediante',
            testimonial: 'Fuí al restaurante luego de salir de un show de mi gira de StandUp, después de un Show sacando sonrisas, la experiencia en este restaurante me saco una a mí'
        },
        {
            name: 'Marina Haussman',
            job: 'Profesora de Universidad',
            testimonial: 'Estaba de paso en la ciudad, me encontre buscando algo bueno que comer, fue una gran sorpresa no solo haber comido platos nuevos, sino que además el trato del personal incluso mejoro mi día, super recomendado!'
        },
        {
            name: 'Angelo Colina',
            job: 'Youtuber',
            testimonial: 'Un restaurante con excelente comida, todo elaborado con muy buenos ingredientes, y personal muy atento, una de las mejores experiencias que he tenido en restaurantes sin duda'
        },
        {
            name: 'Chris Andrade',
            job: 'Diseñador',
            testimonial: 'Ví una publicidad del restaurante en TikTok, me acerque un fin de semana a comer con mi familia, cumplío y incluso diría que supero todas mis expectativas'
        }
    ]

    useEffect(() => {
        const { testimonial, name, job } = testimonials[indiceActual];

        setTestimonioActual({
            texto: testimonial,
            nombre: name,
            trabajo: job
        });

    }, [indiceActual]);

    const manejarSiguiente = () => {

        if (isVisible) {
            setIsVisible(false);
            const timer = setTimeout(() => {
                setIsVisible(true); //Muestra el nuevo testimonio
                setIndiceActual((prevIndex) => (prevIndex + 1) % testimonials.length)
            }, 500); //Duración de la transición

            return () => clearTimeout(timer); //Limpia el temporizador

        }
    }

    const manejarAnterior = () => {
        if (isVisible) {
            setIsVisible(false);
            const timer = setTimeout(() => {
                setIsVisible(true); //Muestra el nuevo testimonio
                setIndiceActual((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
            }, 500); //Duración de la transición

            return () => clearTimeout(timer); //Limpia el temporizador

        }
    };

    return <>
        <div className="container fluid">
            <div className="row">
                <div className="col-12">
                    <section className="testimonio-main-container d-flex justify-content-center">
                        <div className={styles['testimonio-content']}>
                            <div className='imagen-principal-comillas'>
                                <img src={imagenComillas} className={styles['imagen-testimonio']} alt="comillas" />
                            </div>
                            <div className={styles['testimonio-flecha-hacia-la-derecha']}>
                                <button onClick={manejarSiguiente}>
                                    <img src={flecha} className={styles[`${'imagen-testimonio'}`]} alt="flechas-hacia-la-derecha" />
                                </button>
                            </div>
                            <div className={styles['testimonio-flecha-hacia-la-izquierda']}>
                                <button onClick={manejarAnterior}>
                                    <img src={flecha} className={styles['imagen-testimonio']} alt="flecha-hacia-la-izquierda" />
                                </button>
                            </div>
                            <p className={`${styles['texto-testimonio']} ${isVisible ? styles.visible : styles.notvisible}`}>
                                {testimonioActual.texto}
                            </p>
                            <div className={`${styles['detalles-testimonio']} ${isVisible ? styles.visible : styles.notvisible}`}>
                                <p className='nombre-testimonio'>{testimonioActual.nombre}</p>
                                <p className='trabajo-testimonio'>{testimonioActual.trabajo}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </>
}

export default Testimonios;