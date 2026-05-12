import { createContext, useState } from "react";
import { consultas as dadosIniciais } from '../data/consultas';

export const ConsultaContext = createContext(undefined)

export function ConsultaProvider({ children }) {
    const [consultas, setConsultas] = useState(dadosIniciais)

}