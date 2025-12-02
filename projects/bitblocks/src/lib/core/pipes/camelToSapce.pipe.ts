import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'camelToSpace',
    standalone: true
})
export class CamelToSpacePipe implements PipeTransform {

    transform(value: string): string {
        if (!value) return '';

        return value
            // Handle acronyms: split when a lowercase is followed by an uppercase (e.g. "orderID" → "order ID")
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            // Handle normal camelCase / PascalCase: space before uppercase not already spaced
            .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
            // Capitalize first letter
            .replace(/^./, (s) => s.toUpperCase());
    }
}
