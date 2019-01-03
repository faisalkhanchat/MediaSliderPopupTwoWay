import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

import {
  SwiperComponent,
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-media-slider',
  templateUrl: './media-slider.component.html',
  styleUrls: ['./media-slider.component.scss']
})
export class MediaSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('bigSlider') bigSlider: SwiperComponent;
  @ViewChild('thumbsSlider') thumbsSlider: SwiperComponent;
  @ViewChildren('myVideo') myVideo: QueryList<ElementRef<HTMLVideoElement>>;
  @ViewChildren('myAudio') myAudio: QueryList<ElementRef<HTMLAudioElement>>;

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
  constructor( public dialogRef: MatDialogRef<MediaSliderComponent> ) { }
  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
  // public config: SwiperConfigInterface = {
  //   direction: "horizontal",
  //   slidesPerView: 1,
  //   keyboard: true,
  //   mousewheel: true,
  //   scrollbar: false,
  //   navigation: true,
  //   pagination: false
  // };

  public bigSliderConfig: SwiperConfigInterface = {
    slidesPerView: 1,
    pagination: false,
    grabCursor: true,
    observer: true,
    navigation: true,
    autoplay: false,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // }
  };

  thumbsSliderConfig: SwiperConfigInterface = {
    slidesPerView: 12,
    pagination: false,
    observer: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    breakpoints: {
      320: {
        slidesPerView: 4,
      },
      480: {
        slidesPerView: 5,
      },
      767: {
        slidesPerView: 6
      },
      // when window width is <= 640px
      882: {
        slidesPerView: 8,
        spaceBetween: 5
      }
    }
  };

  public onIndexChange(index: number): void {
    // console.log('Swiper index: ', index);
    this.myVideo.forEach((videoRef: ElementRef<HTMLVideoElement>) => {
      // console.log(video);
      videoRef.nativeElement.pause();
    });
    this.myAudio.forEach((audioRef: ElementRef<HTMLAudioElement>) => {
      audioRef.nativeElement.pause();
    });

  }

  ngOnInit() { }

  ngAfterViewInit() {

    this.bigSlider.directiveRef.swiper().controller = {
      control: this.thumbsSlider.directiveRef.swiper()
    };
    this.thumbsSlider.directiveRef.swiper().controller = {
      control: this.bigSlider.directiveRef.swiper()
    };

  }
}

