import { createContext, useState, ReactNode } from "react";
import { consultas as dadosIniciais } from '../data/consultas';
import { Consulta } from "../data/types";

type ConsultaContextType = {
    consultas: Consulta[];
    adicionarConsulta: (novaConsulta: Consulta) => void;
};

export const ConsultaContext = createContext<ConsultaContextType | undefined>(undefined)

export function ConsultaProvider({ children }: { children: ReactNode }) {
    const [consultas, setConsultas] = useState(dadosIniciais)

    function adicionarConsulta(novaConsulta: Consulta) {
        
        setConsultas((consultasAtuias) => [...consultasAtuias, novaConsulta]);
    }

    return (
        <ConsultaContext.Provider value={{ consultas, adicionarConsulta }}>
            {children}
        </ConsultaContext.Provider>
    );
}






