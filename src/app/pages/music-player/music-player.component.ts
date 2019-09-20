import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})

export class MusicPlayerComponent implements OnInit {

  currentPlaying: Howl = new Howl({
    src: ['/assets/new.mp3']
  });
  albumId = 2;
  constructor() { }

  songView = false;

  ngOnInit() {
    // this.currentPlaying.play();
    // setTimeout(() => {
    //   this.currentPlaying.stop()
    // }, 3000);
  }
  albumClicked(e) {
    console.log(e);
    this.albumId = e;
    this.songView = true;
  }
}
