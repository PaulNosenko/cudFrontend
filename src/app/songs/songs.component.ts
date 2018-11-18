import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit, OnDestroy {

  routeSub:any;
  albumName: string;
  req:any;
  songs= [];
  constructor(private route:ActivatedRoute, private http:Http) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params);
      this.albumName = params['albumName'];
      let an = params['albumName'];
      this.req = this.http.get(`https://music-app-api.herokuapp.com/songsInAlbum/${an}`).subscribe(data =>{
        console.log(data)
        this.songs = data.json() as [any];
      }
      )
    })
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
