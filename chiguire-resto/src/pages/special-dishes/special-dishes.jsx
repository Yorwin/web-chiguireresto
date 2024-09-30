import PrimerPlatoEstrella from "./componentes/primer-plato-estrella";
import SliderChiguire from "./componentes/animacion-slider-chiguire";
import SegundoPlatoEstrella from "./componentes/segundo-plato-estrella";
import Reservar from "./componentes/reserva-tu-mesa";

function PlatosEstrella() {
    return <>
        <PrimerPlatoEstrella />
        <SliderChiguire />
        <SegundoPlatoEstrella />
        <SliderChiguire />
        <Reservar />
    </>
}

export default PlatosEstrella;