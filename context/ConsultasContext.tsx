import { createContext, useState, ReactNode, useContext } from "react";
import { consultas as dadosIniciais } from '../data/consultas';
import { Consulta } from "../data/types";

type ConsultaContextType = {
    consultas: Consulta[];
    adicionarConsulta: (novaConsulta: Consulta) => void;
    excluirConsulta: (id: string) => void;
};

export const ConsultaContext = createContext<ConsultaContextType | undefined>(undefined);

export function ConsultaProvider({ children }: { children: ReactNode }) {

    const [consultas, setConsultas] = useState(dadosIniciais);

    function adicionarConsulta(novaConsulta: Consulta) {
        setConsultas((consultasAtuais) => [
            ...consultasAtuais,
            novaConsulta
        ]);
    }

    function excluirConsulta(id: string) {
        setConsultas((consultasAtuais) =>
            consultasAtuais.filter((consulta) => consulta.id !== id)
        );
    }

    return (
        <ConsultaContext.Provider
            value={{
                consultas,
                adicionarConsulta,
                excluirConsulta
            }}
        >
            {children}
        </ConsultaContext.Provider>
    );
}

export function useConsultas() {
    const context = useContext(ConsultaContext);
    
    if (!context) {
        throw new Error("useConsultas deve ser usado dentro de um ConsultaProvider");
    }
    
    return context;
}