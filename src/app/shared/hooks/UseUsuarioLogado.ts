import { useContext } from "react";
import { UsuarioLogadoContext } from "../contexts";


// Hook personalizado para consumir o contexto
export const useUsuarioLogado = () => {
    const context = useContext(UsuarioLogadoContext);

    if (!context) {
        throw new Error("useUsuarioLogado deve ser usado dentro de um UsuarioLogadoProvider");
    }

    return context;
};