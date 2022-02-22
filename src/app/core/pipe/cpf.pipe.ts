import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
    transform(value: string|number,
              ocultValue: boolean = false): string {
        let formatValue = value + '';

        formatValue = formatValue
            .padStart(11, '0')
            .substr(0, 11)
            .replace(/[^0-9]/, '')
            .replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                '$1.$2.$3-$4'
            );

        if (ocultValue) {
            formatValue =
                'XXX.' + formatValue.substr(4, 7) + '-XX';
        }

        return formatValue;
    }
}