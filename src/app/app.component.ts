import { Component, OnInit } from '@angular/core';
import { MediaSliderComponent } from './media-slider/media-slider.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _dialog: MatDialog) {}
  // media popup dialog
  openMediaDialog() {
    // alert('asfd');
    this._dialog.open(MediaSliderComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'fullwidth',
    });
  }
  ngOnInit() {}


}
