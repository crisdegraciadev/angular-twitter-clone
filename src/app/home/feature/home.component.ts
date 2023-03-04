import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from '../../shared/ui/tweet/tweet.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TweetComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
