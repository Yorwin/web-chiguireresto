import styles from '../terminos-y-condiciones.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Cookies() {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);

    return <>
        <main className={styles['contenedor-principal']}>

            {/* Titulo y Mini Menu */}

            <div className={styles['contenedor-titulo-y-menu']}>
                <div className={styles['contenedor-titulo']}>
                    <h1 id='titulo-principal'>Politica de Cookies</h1>
                    <small>El Chiguire Resto</small>
                </div>
                <div className={styles['contenedor-menu']}>
                    <small>
                        <Link to="/">Home</Link>
                        <i className="bi bi-caret-right-fill"></i>
                        <Link to="/politica-privacidad">Politica de Cookies</Link>
                    </small>
                </div>
            </div>

            {/* Texto Politica de Cookies */}

            <div className={styles['contenedor-texto-politica-de-cookies']}>
                <p>
                    Esta web utiliza cookies propias y de terceros para ofrecerle una mejor experiencia y servicio.
                    Sin embargo, tiene la opción de impedir la generación de cookies y la eliminación de las mismas
                    mediante la selección de la correspondiente opción en su Navegador. En caso de bloquear el uso de
                    cookies en su navegador es posible que algunos servicios o funcionalidades de la página Web no estén disponibles.
                </p>
                <h2>¿QUE ES UNA COOKIE?</h2>
                <p>
                    Las cookies constituyen una herramienta empleada por los servidores Web para almacenar y recuperar
                    información acerca de sus visitantes. Es un identificador único en forma de fichero de texto que se remite
                    al dispositivo del usuario para registrar información, permitiendo así mejorar la calidad y seguridad de la
                    página web. Poseen una fecha de caducidad a partir de la cual dejan de ser operativas.
                </p>
                <h2>UTILIDAD DE LAS COOKIES EN MI PÁGINA WEB</h2>
                <p>
                    Utilizamos cookies para facilitar la navegación por la web y para obtener una mayor eficacia y personalización
                    de los servicios que le ofrecemos. Las cookies empleadas se asocian únicamente con un Usuario anónimo y su dispositivo,
                    no proporcionan referencias que permitan obtener sus datos personales ni incluir virus en el mismo. Tampoco se pueden
                    leer las cookies implantadas en su dispositivo desde otros servidores.
                </p>
                <p>
                    La información que analizamos haciendo uso de las cookies son la dirección de protocolo de internet (IP) empleada
                    para conectar su ordenador a internet, tipo y versión de navegador, sistema operativo y plataforma utilizada para
                    la conexión y la fecha y la hora de dicha actividad.
                </p>
                <h2>COOKIES EMPLEADAS</h2>
                <p>
                    Junto a las cookies de registro que le identifican como usuario registrado e indican cuándo usted se ha identificado en
                    el portal, utilizamos otras cookies sobre las que usted ha prestado su consentimiento:
                </p>
                <ul>
                    <li>
                        Cookies de análisis: Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de
                        usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.
                        Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.
                    </li>
                    <li>
                        Cookies publicitarias:Son aquéllas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más
                        eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al
                        contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar sus hábitos de
                        navegación en Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.
                    </li>
                </ul>
                <h2>DESACTIVACIÓN Y ELIMINACIÓN DE COOKIES</h2>
                <p>
                    Puede deshabilitar las cookies mediante la configuración del explorador que le permite rechazar el establecimiento de
                    cookies, en su totalidad o en parte. Sin embargo, si utiliza la configuración del explorador para bloquear todas las
                    cookies, es posible que no pueda acceder total o parcialmente al Sitio.
                </p>
                <p>
                    Puede optar para que el ordenador le advierta cada vez que se le envíe una cookie o puede optar por desactivar todas
                    las cookies. Puede hacerlo a través de las configuraciones de su navegador. Cada navegador es distinto, por lo que
                    probablemente necesitará echar un vistazo a su menú Ayuda.
                </p>
                <p>
                    A continuación le ofrecemos enlaces en los que encontrará información sobre cómo puede activar sus preferencias en los
                    principales navegadores:
                </p>
                <ul>
                    <li>Google Chrome</li>
                    <li>Mozilla Firefox</li>
                    <li>Internet Explorer</li>
                    <li>Microsoft Edge</li>
                    <li>Yandex</li>
                    <li>Opera</li>
                    <li>Safari</li>
                </ul>
                <p>
                    Finalmente, puede usted dirigirse al portal Your Online Choices dónde además de encontrar información útil, podrá
                    configurar, proveedor por proveedor, sus preferencias sobre las cookies publicitarias de terceros.
                </p>
                <p>
                    Usted puede retirar el consentimiento previamente otorgado para la instalación y tratamiento de cookies en cualquier
                    momento. Le informamos que la retirada del consentimiento puede afectar a la funcionalidad de la web. Si desea contactar
                    con nosotros al respecto puede hacerlo en info@chiguireresto.com
                </p>
            </div>
        </main>
    </>
}

export default Cookies;