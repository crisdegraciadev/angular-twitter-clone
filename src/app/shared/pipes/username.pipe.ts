import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username',
  standalone: true,
})
export class UsernamePipe implements PipeTransform {
  transform(username: string): string {
    return `@${username}`;
  }
}
