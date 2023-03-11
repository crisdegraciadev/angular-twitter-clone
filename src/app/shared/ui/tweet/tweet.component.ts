import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpFromBracket,
  faChartSimple,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';
import { UsernamePipe } from '../../pipes/username.pipe';
import { Tweet } from '../../types/tweet.type';
import { ActionBar } from './types/actionbar-option.type';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, UsernamePipe],
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent {
  @Input()
  tweet!: Tweet;

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
