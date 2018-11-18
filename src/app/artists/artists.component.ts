import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit, OnDestroy {
  
  artists = [];
  private req: any;
  constructor(private http:Http) { 

  }

  ngOnInit() {
    this.req = this.http.get('https://music-app-api.herokuapp.com/artists').subscribe(data =>{
      console.log(data)
      this.artists = data.json() as [any];
    }
    )
  }

  ngOnDestroy(): void {
    this.req.unsubscribe()
  }

}
