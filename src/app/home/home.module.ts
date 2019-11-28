import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HomeComponent } from './home/home.component';
import { HomeRouting } from './home.routing';



@NgModule({
  declarations: [SliderComponent, ListProductComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRouting
  ]
})
export class HomeModule { }
