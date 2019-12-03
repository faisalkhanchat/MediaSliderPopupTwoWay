import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaSliderComponent } from './media-slider.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MatButtonModule, MatDialogModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    SwiperModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [MediaSliderComponent],
  entryComponents: [MediaSliderComponent],
})
export class MediaSliderModule { }
