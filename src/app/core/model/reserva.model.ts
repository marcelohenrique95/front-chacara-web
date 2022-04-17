import { Pessoa } from './pessoa.model';

export class Reserva {
    id: number;
    pessoa: Pessoa;
    tpEvento: string;
    dataEntrada: Date;
    dataSaida: Date;
    situacao: number;
    numConvidados: number;
    valor: number;
}