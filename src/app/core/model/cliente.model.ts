import { Reserva } from "./reserva.model";

export interface Cliente {
    id: number;
    nome: string;
    cpf: number;
    telefone: string;
    email: string;
    endereco: string;
    reserva: Reserva[];
}