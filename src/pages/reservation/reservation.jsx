import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { getDocs, collection, addDoc, setDoc, query, where } from 'firebase/firestore';
import styles from '../reservation/reservation.module.css'

function Reservar() {

    /* Control carga de Página */

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    /* Configuración Firebase */

    const coleccionReservas = collection(db, "reservas");

    //Funciones Cumplimentarias. 

    //Función para verificar si ya existe una reserva con el mismo email. 

    const existeReservaConEmail = (email) => {
        //Consulta para verificar si existe un documento con el mismo email. 
        const consulta = query(coleccionReservas, where("email", "==", email));
        return getDocs(consulta).then((consultaSnapshot) => !consultaSnapshot.empty);
    }

    //Funcion para generar un codigo alfanumerico. 

    const generarCodigoUnico = () => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let codigo = '';

        for (let i = 0; i < 6; i++) {
            codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        return codigo;
    }

    //Función para verificar si el codigo de reserva ya existe.

    const existeCodigoReserva = (codigo) => {
        const consulta = query(coleccionReservas, where("codigo_reserva", "==", codigo));
        return getDocs(consulta).then((consultaSnapshot) => !consultaSnapshot.empty);
    }

    //Función para generar un código único. 

    const generarCodigoAlfanumericoUnico = () => {
        let codigo = generarCodigoUnico();

        //Llamamos a la función recursivamente si el código ya existe. 
        return existeCodigoReserva(codigo)
            .then((existe) => {
                if (existe) {
                    return generarCodigoAlfanumericoUnico();
                } else {
                    return codigo;
                }
            })
    }

    //Función para limpiar formulario. 

    const limpiarFormulario = () => {
        setNombre('');
        setFechaReserva('');
        setHora('');
        setNumeroDePersonas('');
        setTelefono('');
        setEmail('');
    };

    //Función para manejar errores. 

    const manejarError = (error) => {
        if (error === "Ya existe una reserva con este correo electrónico") {
            console.log(error);
            setEstadoReservaExitosa(false);
        } else {
            console.error("Error al crear la reserva: ", error);
        }
    };

    //Función para crear nueva reserva. 

    const crearNuevaReserva = (documento) => {
        return addDoc(coleccionReservas, documento).then((referencia) => setDoc(referencia, { fecha_actualizacion: "HOY" }, { merge: true }));
    }

    //Funcion Principal. 

    const crearReserva = (event) => {

        event.preventDefault();

        //Crear el objeto del documento. 
        const documento = { nombre, fechaInput, hora, numeroDePersonas, telefono, email };

        //Verficar si existe una reserva con el mismo email. 
        existeReservaConEmail(email)
            .then((existe) => {
                if (existe) {
                    //Si existe una reserva, rechazamos la promesa con un mensaje
                    setEstadoReservaEmailDuplicado(true);
                    setEstadoReservaExitosa(false);
                    return Promise.reject("Ya existe una reserva con este correo electrónico.");
                } else {
                    //Si no existe, creamos una nueva reserva.
                    return generarCodigoAlfanumericoUnico();
                }
            })
            .then((codigoUnico) => {
                documento.codigo_reserva = codigoUnico;
                return crearNuevaReserva(documento), codigoUnico;
            })
            .then((codigoUnico) => {
                //Limpiar los campos del formulario. 
                limpiarFormulario();
                //Indicar que la reserva fue existosa
                setEstadoReservaEmailDuplicado(false);
                setEstadoReservaExitosa(true);
                setMensajeReservaCompletada(`Reserva Exitosa! El codigo de tu reserva es el ${codigoUnico}`);
            })
            .catch(manejarError);
    }

    /* Mensaje Estado de Reserva */

    const [estadoReservaExitosa, setEstadoReservaExitosa] = useState(false);
    const [estadoReservaEmailDuplicado, setEstadoReservaEmailDuplicado] = useState(false);

    const [mensajeReservaCompletada, setMensajeReservaCompletada] = useState('');

    //Obtener Fecha

    const fecha = new Date();

    const diaFecha = fecha.getDate();
    const mesFecha = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const annoFecha = fecha.getFullYear();

    //Logica Validaciones

    //1 - Capturar los cambios en cada campo. 

    const [nombre, setNombre] = useState('');
    const [fechaInput, setFechaReserva] = useState('');
    const [hora, setHora] = useState('');
    const [numeroDePersonas, setNumeroDePersonas] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    const [formularioValido, setFormularioValido] = useState(false);

    //2 - Capturar estado para los errores.

    const [errorNombre, setErrorNombre] = useState('');
    const [errorFecha, setErrorFecha] = useState('');
    const [errorHora, setErrorHora] = useState('');
    const [errorCorreo, setErrorCorreo] = useState('');
    const [errorTelefono, setErrorTelefono] = useState('');
    const [errorNumeroDePersonas, setErrorNumeroDePersonas] = useState('');

    //3 - Función de validación 

    const validarFormulario = () => {

        //Validacion del nombre

        const nombreValido = nombre.trim().length >= 4 && !/\d/.test(nombre);

        if (nombreValido) {
            setErrorNombre('');
        } else if (nombre === '') {
            setErrorNombre('');
        } else {
            setErrorNombre('El nombre debe tener al menos 4 caracteres.')
        }

        //Validacion de la fecha

        const fechaValido = fechaInput !== '';

        let fechaSeleccionada = new Date(fechaInput);

        const fechaLimite = new Date();
        fechaLimite.setMonth(fechaLimite.getMonth() + 12);

        if (fechaSeleccionada < fecha) {
            setErrorFecha('La fecha no puede ser anterior a la actual')
            return false;
        } else if (fechaSeleccionada > fechaLimite) {
            setErrorFecha('La fecha no puede sobrepasar los 12 meses desde hoy.');
            return false;
        } else {
            setErrorFecha('');
        }

        //Validación hora. 

        const horaValido = hora !== '';

        // Convertimos la hora a formato de 24 horas (HH:MM)
        const [horas, minutos] = hora.split(':');
        const totalMinutos = parseInt(horas) * 60 + parseInt(minutos);

        const minHora = 13 * 60;  // 13:00 en minutos
        const maxHora = 22 * 60;  // 22:00 en minutos

        if (totalMinutos < minHora) {
            setErrorHora('Recuerda: Nuestro horario es de 13:00-22:00pm');
        } else if (totalMinutos > maxHora) {
            setErrorHora('Recuerda: Nuestro horario es de 13:00-22:00pm');
        } else {
            setErrorHora('');
        }

        //Validación número de Personas

        const numeroDePersonasValido = numeroDePersonas >= 1 && numeroDePersonas < 20;

        if (numeroDePersonasValido) {
            setErrorNumeroDePersonas('');
        } else if (numeroDePersonas === '') {
            setErrorNumeroDePersonas('');
        } else if (numeroDePersonas > 20) {
            setErrorNumeroDePersonas('El número máximo de personas para la reserva online es de 20');
        }

        //Validación telefono

        const telefonoValido = /^\+?\d{1,3}[- ]?\d{1,4}[- ]?\d{1,4}[- ]?\d{1,9}$/.test(telefono);

        if (telefonoValido) {
            setErrorTelefono('');
        } else if (telefono === '') {
            setErrorTelefono('')
        } else {
            setErrorTelefono('Número de telefono no valido')
        }

        //Validación correo. 

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (emailValido) {
            setErrorCorreo('');
        } else if (email === '') {
            setErrorCorreo('');
        } else {
            setErrorCorreo('Correo no valido.')
        }

        setFormularioValido(nombreValido && fechaValido && horaValido && numeroDePersonasValido && telefonoValido && emailValido);
    }

    useEffect(() => {
        validarFormulario();
    }, [nombre, fechaInput, hora, numeroDePersonas, telefono, email]);

    //4 - Manejando los cambios en los Inputs. 

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
        validarFormulario();
    }

    const handleFechaChange = (e) => {
        setFechaReserva(e.target.value);
        validarFormulario();
    }

    const handleHoraChange = (e) => {
        setHora(e.target.value);
        validarFormulario();
    }

    const handleNumeroDePersonas = (e) => {
        setNumeroDePersonas(e.target.value);
        validarFormulario();
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        validarFormulario();
    }

    const handleTelefono = (e) => {
        setTelefono(e.target.value);
        validarFormulario();
    }

    //Consultar Reserva. 

    const [campoConsulta, setCampoConsulta] = useState('');

    const [informacionObtenidaReserva, setInformacionObtenidaReserva] = useState(null);
    const [errorConsulta, setErrorConsulta] = useState(null);

    const handleConsultarReserva = (e) => {
        setCampoConsulta(e.target.value);
    }

    const buscarReserva = () => {

        //Reiniciar los mensajes de error y resultados previos. 
        setInformacionObtenidaReserva(null);
        setErrorConsulta(null);

        //Consultar Firestore usando Promesas. 
        const q = query(coleccionReservas, where("codigo_reserva", "==", campoConsulta))
        
        //Ejecutar la consulta. 

        getDocs(q) 
        .then((querySnapshot) => {
            if(querySnapshot.empty) {
                setErrorConsulta("No se encontró ninguna reserva con este código")
            } else {
                const doc = querySnapshot.docs[0];
                setInformacionObtenidaReserva(doc.data());
            }
        })
        .catch((error) => {
            console.error("Error buscando la reserva:", error);
            setErrorConsulta("Hubo un problema buscando la reserva");
        })
    }

    return <>
        <div className={styles['contenedor-imagen-de-fondo']}>
            <div className={styles['contenedor-reserva']}>

                {/* Titulo Reserva */}

                <h1 className={styles['titulo-reserva']}>Reservar</h1>

                {/* Contenedor Formulario Chiguire */}

                <div className={styles['contenedor-formulario-chiguire']}>

                    {/* Introducción Formulario */}

                    <div className={styles['contenedor-texto-reserva']}>
                        <h3>Haz tu reserva Chiguire</h3>
                        <small>Solicita un horario, nosotros lo confirmamos</small>
                    </div>

                    {/* Formulario Reserva */}

                    <form className={styles['formulario-reserva']}>

                        {/* Cuerpo Formulario */}

                        <div className={styles['primera-fila']}>

                            <div className={styles['contenedor-campo-y-texto-formulario']}>
                                <input type="text"
                                    name='nombre_formulario'
                                    placeholder='Nombre'
                                    value={nombre}
                                    onChange={handleNombreChange}
                                    className={errorNombre ? styles['input-invalido'] : (nombre && !errorNombre ? styles['input-valido'] : '')} />

                                {/* Mensaje de error para el nombre */}
                                {errorNombre && <small className={styles['error-message']}>{errorNombre}</small>}
                            </div>

                            <div className={styles['contenedor-campo-y-texto-formulario']}>
                                <input type="date"
                                    name='fecha_formulario'
                                    min={`${annoFecha}-${mesFecha}-${diaFecha}`}
                                    max={`${annoFecha + 1}-${mesFecha}-${diaFecha}`}
                                    value={fechaInput}
                                    onChange={handleFechaChange}
                                    className={errorFecha ? styles['input-invalido'] : (fechaInput && !errorFecha ? styles['input-valido'] : '')} />

                                {/* Mensaje de error para la fecha */}
                                {errorFecha && <small className={styles['error-message']}>{errorFecha}</small>}
                            </div>

                        </div>

                        <div className={styles['segunda-fila']}>

                            <div className={styles['contenedor-campo-y-texto-formulario']}>
                                <input
                                    type="time"
                                    name='time_formulario'
                                    min="13:00"
                                    max="22:00"
                                    value={hora}
                                    onChange={handleHoraChange}
                                    onKeyDown={(e) => e.preventDefault()}
                                    className={errorHora ? styles['input-invalido'] : (hora && !errorHora ? styles['input-valido'] : '')} />

                                {/* Mensaje de error para la hora */}
                                {errorHora && <small className={styles['error-message']}>{errorHora}</small>}
                            </div>

                            <div className={styles['contenedor-campo-y-texto-formulario']}>
                                <input type="number"
                                    name='numero_personas_formulario'
                                    placeholder='Nro. de Personas'
                                    max={20}
                                    min={1}
                                    value={numeroDePersonas}
                                    onChange={handleNumeroDePersonas}
                                    className={errorHora ? styles['input-invalido'] : (numeroDePersonas && !errorNumeroDePersonas ? styles['input-valido'] : '')} />

                                {errorNumeroDePersonas && <small className={styles['error-message']}>{errorNumeroDePersonas}</small>}
                            </div>

                        </div>

                        <div className={styles['tercera-fila']}>

                            <div className={styles['contenedor-campo-y-texto-formulario']}>
                                <input type="email"
                                    name='email_formulario'
                                    placeholder='E-mail'
                                    value={email}
                                    onChange={handleEmail}
                                    className={errorCorreo ? styles['input-invalido'] : (email && !errorCorreo ? styles['input-valido'] : '')} />

                                {errorCorreo && <small className={styles['error-message']}>{errorCorreo}</small>}
                            </div>

                            <div className={styles['contenedor-campo-y-texto-formulario']}>
                                <input type="text"
                                    name='telefono_formulario'
                                    placeholder='Ej. +34 617 345-353'
                                    value={telefono}
                                    onChange={handleTelefono}
                                    className={errorTelefono ? styles['input-invalido'] : (telefono && !errorTelefono ? styles['input-valido'] : '')} />

                                {errorTelefono && <small className={styles['error-message']}>{errorTelefono}</small>}
                            </div>

                        </div>

                        {/* Boton Reservar */}

                        {estadoReservaExitosa && <small className={styles['success-message']}>{mensajeReservaCompletada}</small>}
                        {estadoReservaEmailDuplicado && <small className={styles['error-message-reservation']}>Solo puedes hacer UNA reserva con una dirección de Email, sí quieres crear una nueva, elimina la existente o usa otro Email</small>}

                        <div className={styles['contenedor-formulario-boton-reservar']}>
                            <button type='button' className={styles['boton-formulario-reservar']} name='boton-reservar' onClick={crearReserva} disabled={!formularioValido}>Reservar</button>
                        </div>

                    </form>

                    {/* Subtitulo Buscar Reserva */}

                    <div className={styles['contenedor-subtitulo-formulario']}>
                        <small className={styles['subtitulo-formulario']}>¿Quieres comprobar los detalles de una reserva que has creado antes?</small>
                    </div>

                    {/* Formulario Buscar Reserva */}

                    <form className={styles['contenedor-codigo-reserva']}>

                        {/* Cuerpo Formulario */}

                        <input type="text" className={styles['codigo-reserva']} name='codigo-reserva' value={campoConsulta} placeholder='Codigo Reserva' onChange={handleConsultarReserva} />

                        {/* Boton Buscar Reservar */}

                        <button type='button' className={styles['boton-formulario-buscar']} name='boton-reservar' onClick={buscarReserva}>Buscar</button>

                        {/* Mostrar los detalles de la reserva si existe */}
                        {informacionObtenidaReserva && (
                            <div className={styles['contenedor-detalles-reserva']}>
                                <h2>Detalles de la Reserva</h2>
                                <p><strong>Nombre:</strong> {informacionObtenidaReserva.nombre}</p>
                                <p><strong>E-mail:</strong> {informacionObtenidaReserva.email}</p>
                                <p><strong>Telefono:</strong> {informacionObtenidaReserva.telefono}</p>
                                <p><strong>Nro. de Personas:</strong> {informacionObtenidaReserva.numeroDePersonas}</p>
                                <p><strong>Hora:</strong> {informacionObtenidaReserva.hora}</p>
                                <p><strong>Fecha:</strong> {informacionObtenidaReserva.fechaInput}</p>                        
                                {/* Agregar más detalles según tu estructura de datos */}
                            </div>
                        )}

                        {/* Mostrar error si ocurrió */}
                        {errorConsulta && <p className={styles['error-message']}>{errorConsulta}</p>}

                    </form>

                </div>
            </div>
        </div>
    </>
}

export default Reservar;
