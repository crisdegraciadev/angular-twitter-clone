import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true,
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (value.length <= length + 1) return value;
    return `${value.slice(0, length + 1)}...`;
  }
}
