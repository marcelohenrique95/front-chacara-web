import { Cliente } from "./cliente.model";

export interface Reserva {
    id: number;
    cpfCliente: number;
    tpEvento: string;
    convidados: number;
    dataEntrada: Date;
    dataSaida: Date;
    situacao: number;
    valor: number;
    cliente: Cliente;
}