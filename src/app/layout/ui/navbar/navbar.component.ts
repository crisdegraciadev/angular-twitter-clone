import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NAVBAR_OPTIONS } from './data/navbar-options.data';

import { NavbarOption } from './types/navbar-options.type';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  logo = faTwitter;

  navbarOptions: NavbarOption[] = NAVBAR_OPTIONS;
}
