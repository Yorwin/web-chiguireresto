import ImagenPrincipal from './componentes/imagenprincipal';
import DescubreNuestraCarta from './componentes/descubrenuestracarta';
import GaleriaDeImagenesYTexto from './componentes/pequeña-galeria-imagenes-texto';
import Testimonios from './componentes/testimonios';
import HorariosDireccionYReservas from './componentes/horariosdireccionyreserva';
import Mapa from './componentes/mapa';

function HomePage() {

    return <>
        <ImagenPrincipal />
        <DescubreNuestraCarta />
        <GaleriaDeImagenesYTexto />
        <Testimonios />
        <HorariosDireccionYReservas/>
        <Mapa />
    </>
}

export default HomePage;