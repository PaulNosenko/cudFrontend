import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit {

  req:any;
  all= [];
  constructor(private http:Http) { }

  ngOnInit() {
    
    this.req = this.http.get(`https://music-app-api.herokuapp.com/songs`).subscribe(data =>{
        console.log(data)
        this.all = data.json() as [any];
      })  
    
  }
  
}
