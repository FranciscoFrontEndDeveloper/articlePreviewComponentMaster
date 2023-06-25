import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardmainComponent } from './components/cardmain/cardmain.component';
import { ImagenmainComponent } from './components/imagenmain/imagenmain.component';
import { TextComponent } from './components/text/text.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';

@NgModule({
  declarations: [
    AppComponent,
    CardmainComponent,
    ImagenmainComponent,
    TextComponent,
    AvatarComponent,
    SocialmediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
