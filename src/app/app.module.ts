import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
