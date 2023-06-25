import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardmainComponent } from './components/cardmain/cardmain.component';
import { ImagenmainComponent } from './components/imagenmain/imagenmain.component';

@NgModule({
  declarations: [
    AppComponent,
    CardmainComponent,
    ImagenmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
