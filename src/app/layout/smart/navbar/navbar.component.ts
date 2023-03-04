import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { UserService } from '../../../shared/data-access/user.service';
import { AccountSelectorComponent } from '../../ui/account-selector/account-selector.component';
import { NAVBAR_OPTIONS } from './data/navbar-options.data';

import { NavbarOption } from './types/navbar-option.type';
import { User } from '../../../shared/types/user.type';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, AccountSelectorComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logo = faTwitter;

  navbarOptions: NavbarOption[] = NAVBAR_OPTIONS;

  currentUser$!: Observable<User>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser$ = this.userService.getUser();
  }
}
