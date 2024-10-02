import { createContext } from "react";

const contextoMenu = createContext({
    estadoEscalado: null,
    setEstadoEscalado: () => {}
});

export default contextoMenu;
