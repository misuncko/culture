import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyFamilyComponent } from './my-family/my-family.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AboutMeComponent,
    MyFamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
