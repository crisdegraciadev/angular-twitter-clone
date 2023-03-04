import { ActionBar } from './types/actionbar-option.type';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpFromBracket,
  faChartSimple,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent {
  actionbar: ActionBar[] = [
    {
      icon: faComment,
      value: 2,
    },
    {
      icon: faRetweet,
      value: 50,
    },
    {
      icon: faHeart,
      value: 3,
    },
    {
      icon: faChartSimple,
      value: 1,
    },
    {
      icon: faArrowUpFromBracket,
    },
  ];
}
