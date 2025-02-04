import { createContext, useCallback, useRef, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    setNomeDoUsuario?: (nomeDoUsuario: string) => void
    logout: () => void
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProps {
    children: React.ReactNode
}
export const UsuarioLogado: React.FC<IUsuarioLogadoProps> = ({ children }) => {
    const [nomeDoUsuario, setNomeDoUsuario] = useState('Joel')
    const count = useRef({ count: 0 })

    const handleLogout = useCallback(() => {
        count.current.count = nomeDoUsuario.length * 1000 + count.current.count
        console.log("Logout Executou!:", count.current.count);
    }, [nomeDoUsuario])

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario, setNomeDoUsuario, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}

