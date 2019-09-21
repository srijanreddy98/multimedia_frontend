import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import { MusicDataService } from 'src/app/services/music-data.service';

@Component({
  selector: 'app-music-view',
  templateUrl: './music-view.component.html',
  styleUrls: ['./music-view.component.scss']
})

export class MusicPlayerComponent implements OnInit {

  currentPlaying: Howl = new Howl({
    src: ['/assets/new.mp3']
  });
  albumId = 2;
  song = { artist : ['Spor'],
      album : 'Nightlife, Vol 5.',
      albumartist : [ 'Andy C', 'Spor' ],
      title : 'Stronger',
      year : '2010',
      track : { no : 1, of : 44 },
      disk : { no : 1, of : 2 },
      genre : ['Drum & Bass'],
      // picture : [ { format : 'jpg', data : <Buffer> } ],
      duration : 302.41 // in seconds
    };
  constructor() { }

  currentView = 0;

  ngOnInit() {
    // this.currentPlaying.play();
    // setTimeout(() => {
    //   this.currentPlaying.stop()
    // }, 3000);
  }
  albumClicked(e) {
    console.log(e);
    this.albumId = e;
    this.currentView = 1;
  }

  backClicked(e) {
    console.log(e);
    this.currentView = 0;
  }

  songClicked(e) {
    console.log(e);
    this.currentView = 2;
  }
}
