import { SongsComponent } from './songs/songs.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { AllSongsComponent } from './all-songs/all-songs.component';

const appRoutes : Routes = [
    {
        path:"artists",
        component: ArtistsComponent
    },
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"albums/:artist",
        component: AlbumsComponent
    },
    {
        path:"albums/:artist/:albumName",
        component: SongsComponent
    },
    {
        path:":song",
        component: VideoComponent
    },
    {
        path:"songs/all",
        component: AllSongsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}