import ImagenPrincipal from "./componentes/imagen-principal";
import PresentacionCarta from "./componentes/presentacion-carta-comida";
import Menu from "./componentes/menu-restaurante";
import { useEffect } from "react";

function MenuRestaurante() {

    /* Control carga de Página */
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return <>
        <ImagenPrincipal />
        <PresentacionCarta />
        <Menu />
        <br />
        <br />
        <br />
    </>
}

export default MenuRestaurante;