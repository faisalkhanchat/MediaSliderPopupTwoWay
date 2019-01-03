import { MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaSliderComponent } from './media-slider.component';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    MatButtonModule,
  ],
  declarations: [MediaSliderComponent],
  entryComponents: [MediaSliderComponent],
})
export class MediaSliderModule { }
