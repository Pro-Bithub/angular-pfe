import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout-tutor',
  templateUrl: './layout-tutor.component.html',
  styleUrls: ['./layout-tutor.component.scss']
})
export class LayoutTutorComponent implements OnInit, OnDestroy {
  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;
  private readonly mediaWatcher: Subscription;
  constructor(media: MediaObserver) {
    this.mediaWatcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        if (this.sideNavOpened) {
          this.sideNavOpened = false;
        }
        this.sideNavMode = 'over';
      } else {
        this.sideNavOpened = true;
        this.sideNavMode = 'side';
      }
      if (change.mqAlias === 'xs') {
        this.toolBarHeight = 56;
      } else {
        this.toolBarHeight = 64;
      }
    });
  }
  ngOnInit() { }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }
}
