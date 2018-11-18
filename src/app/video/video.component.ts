import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, OnDestroy {

  routeSub:any;
  song: string;
  req:any;
  video: any;
  constructor(private route:ActivatedRoute, private http:Http, private san:DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params);
      this.song = params['song'];
      let an = params['song'];
      console.log(an);
      this.req = this.http.get(`https://music-app-api.herokuapp.com/songs/${an}`).subscribe(data =>{
        this.video = data.json();
      }
      )
    })
  }

  getUrl(video){
    return this.san.bypassSecurityTrustResourceUrl(video.link);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
