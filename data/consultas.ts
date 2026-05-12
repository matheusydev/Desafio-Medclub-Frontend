import { Consulta } from "./types";

export const consultas: Consulta[] = [
    {
        id: "1",
        data: new Date("2026-05-25T10:00"),
        medico: "Dr. Matheus Ylan Araujo Moraes",
        especialidade: "Fisioterapeuta",
        localizacao: "centro"
    },
    {
        id: "2",
        data: new Date("2026-05-25T10:00:00"),
        medico: "Dra. Yasmim Lyra Sousa",
        especialidade: "Psicologa",
        localizacao: "Zona norte"
    },
    {
        id: "3",
        data: new Date("2026-05-26T14:30:00"),
        medico: "Dr. Ricardo Oliveira",
        especialidade: "Cardiologista",
        localizacao: "Zona Leste"
    },
    {
        id: "4",
        data: new Date("2026-05-27T09:15:00"),
        medico: "Dra. Beatriz Santos",
        especialidade: "Nutricionista",
        localizacao: "Zona Sul"
    },
];