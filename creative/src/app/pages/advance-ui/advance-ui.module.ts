import { AfterViewInit, Component, OnInit ,NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

// Simple bar
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';


// Load Icon
import { defineElement } from '@lordicon/element';

// Component pages
import { AsvanceUiRoutingModule } from './advance-ui-routing.module';
import { SweetalertsComponent } from './sweetalerts/sweetalerts.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { TourComponent } from './tour/tour.component';
import { SwipersComponent } from './swiper/swiper.component';
import { RatingsComponent } from './ratings/ratings.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SweetalertsComponent,
    ScrollbarComponent,
    TourComponent,
    SwipersComponent,
    RatingsComponent,
    HighlightComponent,
    ScrollspyComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbRatingModule,
    SimplebarAngularModule,
    AsvanceUiRoutingModule,
    SlickCarouselModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdvanceUiModule { 
  constructor() {
    defineElement();
  }
}
