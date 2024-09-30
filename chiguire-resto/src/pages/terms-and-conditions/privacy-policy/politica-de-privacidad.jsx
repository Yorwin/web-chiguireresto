import styles from '../terminos-y-condiciones.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function PoliticaDePrivacidad() {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);

    return <>
        <main className={styles['contenedor-principal']}>

            {/* Titulo y Mini Menu */}

            <div className={styles['contenedor-titulo-y-menu']}>
                <div className={styles['contenedor-titulo']}>
                    <h1 id='titulo-principal'>Politica de Privacidad</h1>
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

            <div className={styles['contenedor-texto-politica-de-privacidad']}>
                <h3>Política de Privacidad e información sobre el tratamiento de datos personales</h3>

                <div className={styles['texto-politica-de-privacidad']}>

                    {/* Titulo */}

                    <h3>Protección de datos de carácter personal segun el RGPD</h3>

                    {/* Texto */}

                    <p><strong>Chiguire Resto SL</strong>, en aplicación de la normativa vigente en materia de protección de datos de carácter personal, informa que los datos personales que se recogen a través de los formularios del Sitio web: <a href="http://www.chiguireresto.com">www.chiguireresto.com</a>, se incluyen en los ficheros automatizados específicos de usuarios de los servicios de Chiguire Resto SL.</p>
                    <p>La recogida y tratamiento automatizado de los datos de carácter personal tiene como finalidad el mantenimiento de la relación comercial y el desempeño de tareas de información, formación, asesoramiento y otras actividades propias de Chiguire Resto SL. Estos datos únicamente serán cedidos a aquellas entidades que sean necesarias con el único objetivo de dar cumplimiento a la finalidad anteriormente expuesta.</p>
                    <p>Chiguire Resto SL adopta las medidas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos conforme a lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los mismos, y derogando la antigua LOPD, la nueva Ley Orgánica 3/2018, de 5 diciembre, de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD).</p>
                    <p>El usuario podrá en cualquier momento ejercitar los derechos de acceso, oposición, rectificación, cancelación, limitación y portabilidad reconocidos en el citado Reglamento (UE). El ejercicio de estos derechos puede realizarlo el propio usuario a través de email a: <a href="mailto:hello@chiguireresto.com">hello@chiguireresto.com</a> o en la dirección: Av. Cortes Valencianas 20, C.P. 46015 – Valencia (Valencia).</p>
                    <p>El usuario manifiesta que todos los datos facilitados por él son ciertos y correctos, y se compromete a mantenerlos actualizados, comunicando los cambios a Chiguire Resto SL.</p>

                    {/* Titulo */}

                    <h2>Finalidad del tratamiento de los datos personales:</h2>
                    <h3>¿Con qué finalidad trataremos tus datos personales?</h3>

                    {/* Texto */}

                    <p>En Chiguire Resto SL, trataremos tus datos personales recabados a través del Sitio Web: <a href="http://www.chiguireresto.com">www.chiguireresto.com</a>, con las siguientes finalidades:</p>

                    <ol>
                        <li>Prestar sus servicios de acuerdo con las necesidades particulares de los clientes, con el fin de cumplir los contratos suscritos por la misma.</li>
                    </ol>

                    <p>Te recordamos que puedes oponerte al envío de comunicaciones comerciales por cualquier vía y en cualquier momento, remitiendo un correo electrónico a la dirección anteriormente indicada.</p>
                    <p>Los campos de dichos registros son de cumplimentación obligatoria, siendo imposible realizar las finalidades expresadas si no se aportan esos datos.</p>

                    {/* Titulo */}

                    <h3>¿Por cuánto tiempo se conservan los datos personales recabados?</h3>

                    {/* Texto */}

                    <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o no solicites su supresión y durante el plazo por el cuál pudieran derivarse responsabilidades legales por los servicios prestados.</p>

                    <h2>Legitimación:</h2>

                    <p>El tratamiento de tus datos se realiza con las siguientes bases jurídicas que legitiman el mismo:</p>

                    <ol>
                        <li>La solicitud de información y/o la contratación de los servicios de Chiguire Resto SL, cuyos términos y condiciones se pondrán a tu disposición en todo caso, de forma previa a una eventual contratación.</li>
                        <li>El consentimiento libre, específico, informado e inequívoco, en tanto que te informamos poniendo a tu disposición la presente política de privacidad, que tras la lectura de la misma, en caso de estar conforme, puedes aceptar mediante una declaración o una clara acción afirmativa, como el marcado de una casilla dispuesta al efecto.</li>
                    </ol>

                    <p>En caso de que no nos facilites tus datos o lo hagas de forma errónea o incompleta, no podremos atender tu solicitud, resultando del todo imposible proporcionarte la información solicitada o llevar a cabo la contratación de los servicios.</p>

                    {/* Titulo */}

                    <h2>Destinatarios:</h2>

                    {/* Texto */}

                    <p>Los datos no se comunicarán a ningún tercero ajeno a Chiguire Resto SL, salvo obligación legal.</p>

                    {/* Titulo */}

                    <h2>Datos recopilados por usuarios de los servicios</h2>

                    {/* Texto */}

                    <p>En los casos en que el usuario incluya ficheros con datos de carácter personal en los servidores de alojamiento compartido, Chiguire Resto SL no se hace responsable del incumplimiento por parte del usuario del RGPD.</p>

                    {/* Titulo */}

                    <h2>Derechos propiedad intelectual <a href="http://www.chiguireresto.com">www.chiguireresto.com</a></h2>

                    {/* Texto */}

                    <p>Chiguire Resto SL es titular de todos los derechos de autor, propiedad intelectual, industrial, «know how» y cuantos otros derechos guardan relación con los contenidos del sitio web <a href="http://www.chiguireresto.com">www.chiguireresto.com</a> y los servicios ofertados en el mismo, así como de los programas necesarios para su implementación y la información relacionada.</p>
                    <p>No se permite la reproducción, publicación y/o uso no estrictamente privado de los contenidos, totales o parciales, del sitio web <a href="http://www.chiguireresto.com">www.chiguireresto.com</a> sin el consentimiento previo y por escrito.</p>

                    {/* Titulo */}

                    <h2>Propiedad intelectual del software</h2>

                    {/* Texto */}

                    <p>El usuario debe respetar los programas de terceros puestos a su disposición por Chiguire Resto SL, aún siendo gratuitos y/o de disposición pública.</p>
                    <p>Chiguire Resto SL dispone de los derechos de explotación y propiedad intelectual necesarios del software. El usuario no adquiere derecho alguno o licencia por el servicio contratado, sobre el software necesario para la prestación del servicio, ni tampoco sobre la información técnica de seguimiento del servicio, excepción hecha de los derechos y licencias necesarios para el cumplimiento de los servicios contratados y únicamente durante la duración de los mismos.</p>
                    <p>Para toda actuación que exceda del cumplimiento del contrato, el usuario necesitará autorización por escrito por parte de Chiguire Resto SL, quedando prohibido al usuario acceder, modificar, visualizar la configuración, estructura y ficheros de los servidores propiedad de Chiguire Resto SL, asumiendo la responsabilidad civil y penal derivada de cualquier incidencia que se pudiera producir en los servidores y sistemas de seguridad como consecuencia directa de una actuación negligente o maliciosa por su parte.</p>

                    {/* Titulo */}

                    <h2>Propiedad intelectual de los contenidos alojados</h2>

                    {/* Texto */}

                    <p>Se prohíbe el uso contrario a la legislación sobre propiedad intelectual de los servicios prestados por Chiguire Resto SL y, en particular de:</p>

                    <ol>
                        <li>La utilización que resulte contraria a las leyes españolas o que infrinja los derechos de terceros.</li>
                        <li>La publicación o la transmisión de cualquier contenido que, a juicio de Chiguire Resto SL, resulte violento, obsceno, abusivo, ilegal, racial, xenófobo o difamatorio.</li>
                        <li>Los cracks, números de serie de programas o cualquier otro contenido que vulnere derechos de la propiedad intelectual de terceros.</li>
                        <li>La recogida y/o utilización de datos personales de otros usuarios sin su consentimiento expreso o contraviniendo lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los mismos.</li>
                        <li>La utilización del servidor de correo del dominio y de las direcciones de correo electrónico para el envío de correo masivo no deseado.</li>
                    </ol>

                    <p>El usuario tiene toda la responsabilidad sobre el contenido de su web, la información transmitida y almacenada, los enlaces de hipertexto, las reivindicaciones de terceros y las acciones legales en referencia a propiedad intelectual, derechos de terceros y protección de menores.</p>
                    <p>El usuario es responsable respecto a las leyes y reglamentos en vigor y las reglas que tienen que ver con el funcionamiento del servicio online, comercio electrónico, derechos de autor, mantenimiento del orden público, así como principios universales de uso de Internet.</p>
                    <p>El usuario indemnizará a Chiguire Resto SL por los gastos que generara la imputación de Chiguire Resto SL en alguna causa cuya responsabilidad fuera atribuible al usuario, incluidos honorarios y gastos de defensa jurídica, incluso en el caso de una decisión judicial no definitiva.</p>

                    {/* Titulo */}

                    <h2>Protección de la información alojada</h2>

                    {/* Texto */}

                    <p>Chiguire Resto SL realiza copias de seguridad de los contenidos alojados en sus servidores, sin embargo no se responsabiliza de la pérdida o el borrado accidental de los datos por parte de los usuarios. De igual manera, no garantiza la reposición total de los datos borrados por los usuarios, ya que los citados datos podrían haber sido suprimidos y/o modificados durante el periodo del tiempo transcurrido desde la última copia de seguridad.</p>
                    <p>Los servicios ofertados, excepto los servicios específicos de backup, no incluyen la reposición de los contenidos conservados en las copias de seguridad realizadas por Chiguire Resto SL, cuando esta pérdida sea imputable al usuario; en este caso, se determinará una tarifa acorde a la complejidad y volumen de la recuperación, siempre previa aceptación del usuario.</p>
                    <p>La reposición de datos borrados sólo está incluida en el precio del servicio cuando la pérdida del contenido sea debida a causas atribuibles a Chiguire Resto SL.</p>

                    {/* Titulo */}

                    <h2>Comunicaciones comerciales</h2>

                    {/* Texto */}

                    <p>En aplicación de la LSSI, Chiguire Resto SL no enviará comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.</p>
                    <p>En el caso de usuarios con los que exista una relación contractual previa, Chiguire Resto SL sí está autorizado al envío de comunicaciones comerciales referentes a productos o servicios de Chiguire Resto SL que sean similares a los que inicialmente fueron objeto de contratación con el cliente.</p>
                    <p>En todo caso, el usuario, tras acreditar su identidad, podrá solicitar que no se le haga llegar más información comercial a través de los canales de Atención al Cliente.</p>

                </div>
            </div>
        </main>
    </>
}

export default PoliticaDePrivacidad;