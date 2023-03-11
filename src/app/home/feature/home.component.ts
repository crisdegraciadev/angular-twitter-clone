import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from '../../shared/ui/tweet/tweet.component';
import { TweetService } from 'src/app/shared/data-access/tweet.service';
import { Observable } from 'rxjs';
import { Tweet } from 'src/app/shared/types/tweet.type';
import { HomeTabComponent } from '../ui/home-tab/home-tab.component';
import { HomeContext } from '../types/home-context.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TweetComponent, HomeTabComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tweets$!: Observable<Tweet[]>;

  constructor(private tweetService: TweetService) {}

  ngOnInit(): void {
    this.tweets$ = this.tweetService.getTweets();
  }

  handleContextChange(context: HomeContext) {
    // TODO change tweets context
    console.log(context);
  }
}
