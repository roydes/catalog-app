import { Component } from '@angular/core';
import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavOpened = false;
  title = 'Funny Flyers';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  sidenavOpenedChange(opened) {
    this.sidenavOpened = opened;
    console.log(this.sidenavOpened);
  }
}
