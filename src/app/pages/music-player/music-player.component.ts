import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})

export class MusicPlayerComponent implements OnInit {

  songs = [
    { artist : ['Spor'],
      album : 'Nightlife, Vol 5.',
      albumartist : [ 'Andy C', 'Spor' ],
      title : 'Stronger',
      year : '2010',
      track : { no : 1, of : 44 },
      disk : { no : 1, of : 2 },
      genre : ['Drum & Bass'],
      // picture : [ { format : 'jpg', data : <Buffer> } ],
      duration : 302.41 // in seconds
    },
    { artist : ['Spor'],
      album : 'Nightlife, Vol 5.',
      albumartist : [ 'Andy C', 'Spor' ],
      title : 'Stronger',
      year : '2010',
      track : { no : 1, of : 44 },
      disk : { no : 1, of : 2 },
      genre : ['Drum & Bass'],
      // picture : [ { format : 'jpg', data : <Buffer> } ],
      duration : 302.41 // in seconds
    },
    { artist : ['Spor'],
      album : 'Nightlife, Vol 5.',
      albumartist : [ 'Andy C', 'Spor' ],
      title : 'Stronger',
      year : '2010',
      track : { no : 1, of : 44 },
      disk : { no : 1, of : 2 },
      genre : ['Drum & Bass'],
      // picture : [ { format : 'jpg', data : <Buffer> } ],
      duration : 302.41 // in seconds
    }
  ];

  currentPlaying: Howl = new Howl({
    src: ['/assets/new.mp3']
  });

  constructor() { }

  ngOnInit() {
    this.currentPlaying.play();
    setTimeout(() => {
      this.currentPlaying.stop()
    }, 3000);
  }

}
