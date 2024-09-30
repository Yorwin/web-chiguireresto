import styles from '../terminos-y-condiciones.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function AvisoLegal() {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);

    return <>
        <main className={styles['contenedor-principal']}>

            {/* Titulo y Mini Menu */}

            <div className={styles['contenedor-titulo-y-menu']}>
                <div className={styles['contenedor-titulo']}>
                    <h1 id='titulo-principal'>AVISO LEGAL</h1>
                    <small>El Chiguire Resto</small>
                </div>
                <div className={styles['contenedor-menu']}>
                    <small>
                        <Link to="/">Home</Link>
                        <i className="bi bi-caret-right-fill"></i>
                        <Link to="/politica-privacidad">Politica de Privacidad</Link>
                    </small>
                </div>
            </div>

            {/* Texto Politica de Privacidad */}

            <div className={styles['contenedor-texto-aviso-legal']}>
                <p>
                    En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio,
                    de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web le informa de lo siguiente:
                </p>
                <ul>
                    <li><strong>Denominación social:</strong> Chiguire Resto, S.L</li>
                    <li><strong>NIF:</strong> B00000000</li>
                    <li><strong>Domicilio:</strong> C/ de Lluís de Santàngel, 20, L'Eixample, 46005 València</li>
                </ul>
                <p>
                    Con los límites establecidos en la ley, Chiguire Resto, S.L no asume ninguna responsabilidad derivada de la falta de veracidad,
                    integridad, actualización y precisión de los datos o informaciones que contienen sus páginas web.
                </p>
                <p>
                    Los contenidos e información no vinculan a Chiguire Resto, S.L ni constituyen opiniones, consejos o asesoramiento legal de ningún tipo,
                    pues se trata meramente de un servicio ofrecido con carácter informativo y divulgativo.
                </p>
                <p>
                    Las páginas de Internet de Chiguire Resto, S.L pueden contener enlaces (links) a otras páginas de terceras partes que Chiguire Resto,
                    S.L no puede controlar. Por lo tanto, Chiguire Resto, S.L no puede asumir responsabilidades por el contenido que pueda aparecer en
                    páginas de terceros.
                </p>
                <p>
                    Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en este website son propiedad exclusiva
                    de Chiguire Resto, S.L o sus licenciantes. Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o
                    comunicación pública total o parcial, deberá contar con el consentimiento expreso de Chiguire Resto, S.L.
                </p>
                <p>
                    Asimismo, para acceder a algunos de los servicios que Chiguire Resto, S.L ofrece a través del sitio web, deberá proporcionar algunos
                    datos de carácter personal. En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo,
                    de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a
                    la libre circulación de estos datos le informamos que, mediante la cumplimentación de los presentes formularios, sus datos personales
                    quedarán incorporados y serán tratados en los ficheros de Chiguire Resto, S.L con el fin de poderle prestar y ofrecer nuestros servicios
                    así como para informarle de las mejoras del sitio Web.
                </p>
                <p>
                    Le informamos también de que tendrá la posibilidad en todo momento de ejercer los derechos de acceso, rectificación, cancelación,
                    oposición, limitación y portabilidad de sus datos de carácter personal, de manera gratuita mediante email a:
                    <a href="mailto:hello@chiguireresto.com">hello@chiguireresto.com</a> o en la dirección: C/ de Lluís de Santàngel, 20, L'Eixample, 46005 València.
                </p>
            </div>
        </main>
    </>
}

export default AvisoLegal;