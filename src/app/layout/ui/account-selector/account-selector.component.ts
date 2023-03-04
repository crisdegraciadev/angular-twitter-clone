import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernamePipe } from '../../../shared/pipes/username.pipe';
import { ShortenPipe } from '../../../shared/pipes/shorten.pipe';

@Component({
  selector: 'app-account-selector',
  standalone: true,
  imports: [CommonModule, UsernamePipe, ShortenPipe],
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.css'],
})
export class AccountSelectorComponent {
  @Input()
  fullname!: string;

  @Input()
  username!: string;
}
