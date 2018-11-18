import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { SongsComponent } from './songs/songs.component';
import { AlbumsComponent } from './albums/albums.component';
import { AppRoutingModule } from './routing';
import { HttpModule } from '@angular/http';
import { VideoComponent } from './video/video.component';
import { AllSongsComponent } from './all-songs/all-songs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    SongsComponent,
    AlbumsComponent,
    VideoComponent,
    AllSongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
