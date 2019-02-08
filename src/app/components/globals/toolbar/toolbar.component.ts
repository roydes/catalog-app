import { ChangeDetectorRef, Component, OnInit, OnChanges, OnDestroy, SimpleChange, Input, Output, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavigationService } from '../../../services/navigation.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnChanges, OnDestroy  {
  @Input() title: string;
  @Output()sidenavOpenedEmitter: EventEmitter<boolean>;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  sidenavOpened: boolean;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private navigationService: NavigationService,
    private authenticationService: AuthenticationService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.sidenavOpenedEmitter = new EventEmitter<boolean>();
    this.sidenavOpened = false;
  }
  ngOnChanges(change: any) {
    console.log(change);
  }

  ngOnInit() {
  }

  sidebarOpened() {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenavOpenedEmitter.emit(this.sidenavOpened);
  }
  onLogout() {
    this.authenticationService.logout();
    this.navigationService.goToLogin();
  }

  ngOnDestroy(): void {
  this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
