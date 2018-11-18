import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  routeSub:any;
  artist: string;
  req:any;
  albums= [];
  constructor(private route:ActivatedRoute, private http:Http) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params);
      this.artist = params['artist'];
      let art = params['artist'];
      this.req = this.http.get(`https://music-app-api.herokuapp.com/albumsOf/${art}`).subscribe(data =>{
        console.log(data)
        this.albums = data.json() as [any];
      }
      )
    })
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
