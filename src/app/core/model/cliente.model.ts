import { Reserva } from "./reserva.model";

export class Cliente {
    id: number;
    nome: string;
    cpf: number;
    telefone: string;
    email: string;
    endereco: string;
    reserva: Reserva[];
}