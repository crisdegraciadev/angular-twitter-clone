import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { AuxPanelComponent } from '../ui/aux-panel/aux-panel.component';
import { NavbarComponent } from '../ui/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, AppRoutingModule, NavbarComponent, AuxPanelComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {}
