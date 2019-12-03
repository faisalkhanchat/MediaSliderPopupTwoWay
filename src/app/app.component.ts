import { Component, OnInit } from '@angular/core';
import { MediaSliderComponent } from './media-slider/media-slider.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  slides = [
    { type: 'IMAGE', path: 'http://i.pravatar.cc/1000?img=8', smPath: 'http://i.pravatar.cc/200?img=8' },
    { type: 'VIDEO', path: 'assets/images/mov_bbb.mp4', smPath: 'assets/images/video_icon.png' },
    { type: 'AUDIO', path: 'assets/images/horse.ogg', smPath: 'assets/images/audio_icon.png' },
    {
      type: 'IMAGE',
      path: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
      smPath: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'
    },
    {
      type: 'IMAGE',
      path: 'https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg',
      smPath: 'https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg'
     },
     { type: 'VIDEO', path: 'assets/images/mov_bbb.mp4', smPath: 'assets/images/video_icon.png' },
     { type: 'AUDIO', path: 'assets/images/horse.ogg', smPath: 'assets/images/audio_icon.png' },
     {
      type: 'IMAGE',
      path: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
      smPath: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'
    },
    {
      type: 'IMAGE',
      path: 'https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg',
      smPath: 'https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg'
     },
     {
      type: 'IMAGE',
      path: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
      smPath: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'
    },
    {
      type: 'IMAGE',
      path: 'https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg',
      smPath: 'https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg'
     },

  ];

  constructor(private _dialog: MatDialog) { }
  // media popup dialog
  openMediaDialog(id: number) {
    // alert('asfd');
    this._dialog.open(MediaSliderComponent, {
      data: { slider: this.slides, idnum: id }
    });
  }

  ngOnInit() { }


}
