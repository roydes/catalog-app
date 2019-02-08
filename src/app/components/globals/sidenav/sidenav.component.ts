import { Component, OnInit, OnChanges, OnDestroy, Input, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavigationService } from '../../../services/navigation.service';
import { NotImplementedComponent } from '../not-implemented/not-implemented.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnChanges, OnDestroy {
  @Input() opened: boolean;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private navigationService: NavigationService,
    private dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnChanges(change: SimpleChanges) {
    console.log(change);
    this.opened = change.opened.currentValue;
    console.log(this.opened);
  }

  ngOnInit() {
  }

  notImplementedYet() {
    const dialogRef = this.dialog.open(NotImplementedComponent, {
      width: '70%',
      hasBackdrop: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
