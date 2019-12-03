import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ElementRef, Inject } from '@angular/core';

import {
  SwiperComponent,
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-media-slider',
  templateUrl: './media-slider.component.html',
  styleUrls: ['./media-slider.component.scss']
})
export class MediaSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('bigSlider', {static: false}) bigSlider: SwiperComponent;
  @ViewChild('thumbsSlider', {static: false}) thumbsSlider: SwiperComponent;
  @ViewChildren('myVideo') myVideo: QueryList<ElementRef<HTMLVideoElement>>;
  @ViewChildren('myAudio') myAudio: QueryList<ElementRef<HTMLAudioElement>>;

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

  index: any;
  slides = [];
  constructor(
    public dialogRef: MatDialogRef<MediaSliderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
       this.index = this.data.idnum;
       this.slides = this.data.slider;
       console.log( this.slides );
       
  }
  closeDialog() {
    this.dialogRef.close();
  }


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
