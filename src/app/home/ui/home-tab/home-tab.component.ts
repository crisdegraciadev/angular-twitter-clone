import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeContext } from '../../types/home-context.type';
import { TabContext } from './types/tab-context.type';
import { TabStyles } from './types/tab-style.type';

@Component({
  selector: 'app-home-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css'],
})
export class HomeTabComponent {
  @Output()
  onContextChange = new EventEmitter<HomeContext>();

  private forYouActive: TabStyles = {
    forYou: {
      button: 'font-medium',
      underline: 'block',
    },
    following: {
      button: 'font-normal',
      underline: 'hidden',
    },
  };

  private followingActive: TabStyles = {
    forYou: {
      button: 'font-normal',
      underline: 'hidden',
    },
    following: {
      button: 'font-medium',
      underline: 'block',
    },
  };

  private tabStylesData$ = new BehaviorSubject<TabStyles>({
    forYou: {
      button: 'font-medium',
      underline: 'block',
    },
    following: {
      button: 'font-normal',
      underline: 'hidden',
    },
  });

  tabStyles$ = this.tabStylesData$.asObservable();

  getForYouTweets() {
    this.tabStylesData$.next(this.forYouActive);
    this.onContextChange.next('forYou');
  }

  getFollowingTweets() {
    this.tabStylesData$.next(this.followingActive);
    this.onContextChange.next('following');
  }
}
