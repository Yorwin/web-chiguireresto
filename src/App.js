import './App.css';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Header from './layout/header'
import Footer from './layout/footer';
import CerrarNavBar from './layout/cerrarnavbar';
import ContextoEscaladoMenu from './contexto/contexto-menu';
import Menu from './layout/menu';
import HomePage from './pages/home/homepage'
import MenuRestaurante from './pages/menu-restaurante/menu-restaurante'
import MenusDeGrupo from './pages/group-menus/group-menu'
import Reservacion from './pages/reservation/reservation'
import PlatosEstrella from './pages/special-dishes/special-dishes'
import Cookies from './pages/terms-and-conditions/cookies/cookies'
import AvisoLegal from './pages/terms-and-conditions/legal-aware/aviso-legal'
import PoliticaPrivacidad from './pages/terms-and-conditions/privacy-policy/politica-de-privacidad'
import ImagenGalleta from './cookies/img/cookie.svg'

function App() {

  const contenedorPrincipalRef = useRef(null);
  const headerContenedor = useRef(null);

  const [estadoEscalado, setEstadoEscalado] = useState(false);

  //Cookies

  const avisoCookies = useRef(null);
  const fondoAvisoCookies = useRef(null);

  useEffect(() => {

    const elementoAvisoCookies = avisoCookies.current;
    const elementoFondoAvisoCookies = fondoAvisoCookies.current;

    if (!localStorage.getItem('cookies-aceptadas') && elementoAvisoCookies && elementoFondoAvisoCookies) {
      elementoAvisoCookies.classList.add('activo');
      elementoFondoAvisoCookies.classList.add('activo');
    }
  }, []);

  const aceptarCookies = () => {

    const elementoAvisoCookies = avisoCookies.current;
    const elementoFondoAvisoCookies = fondoAvisoCookies.current;

    elementoAvisoCookies.classList.remove('activo');
    elementoFondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);
  }

  return <>
    <BrowserRouter>
      <ContextoEscaladoMenu.Provider value={{ estadoEscalado, setEstadoEscalado }}>
        <div className='contenedor-principal-webpage'>
          <Menu contenedorPrincipal={contenedorPrincipalRef} header={headerContenedor} />
          <CerrarNavBar contenedorPrincipal={contenedorPrincipalRef} />
          <div className='contenedor-contenido-completo-webpage' ref={contenedorPrincipalRef}>
            <Header contenedorPrincipal={contenedorPrincipalRef} ref={headerContenedor} />
            <main className='contenedor-contenido-webpage'>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reservar" element={<Reservacion />} />
                <Route path="/menu" element={<MenuRestaurante />} />
                <Route path="/menus-de-grupos" element={<MenusDeGrupo />} />
                <Route path="/platos-estrella" element={<PlatosEstrella />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/aviso-legal" element={<AvisoLegal />} />
                <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <div className='aviso-cookies' ref={avisoCookies}>
            <img src={ImagenGalleta} className="galleta" alt='Galleta'></img>
            <h3 className="titulo-cookies">Cookies</h3>
            <p className="parrafo-cookies">Utilizamos cookies propias y de terceros para mejorar nuestros servicios.</p>
            <button className="boton-aceptar-cookies" id="aceptar-cookies" onClick={aceptarCookies}>De acuerdo</button>
            <Link className="enlace-cookies" to="/cookies">Aviso de Cookies</Link>
          </div>
          <div className="fondo-aviso-cookies" ref={fondoAvisoCookies}></div>
        </div>
      </ContextoEscaladoMenu.Provider>
    </BrowserRouter>
  </>
}

export default App;
