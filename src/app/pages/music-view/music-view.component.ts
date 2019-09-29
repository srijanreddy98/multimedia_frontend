import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import { MusicDataService } from 'src/app/services/music-data.service';
import { NowPlayingService } from 'src/app/services/now-playing.service';

@Component({
  selector: 'app-music-view',
  templateUrl: './music-view.component.html',
  styleUrls: ['./music-view.component.scss']
})

export class MusicPlayerComponent implements OnInit {

  currentPlaying: Howl = new Howl({
    src: [`/api/play?id=${1}`],
    html5: true,
    format: ['MP3']
  });
  albumId = 2;
  constructor(private musicDataService: MusicDataService, private nowPlayingService: NowPlayingService) { }
  song = new Howl({
    src: [`/api/play?id=${1}`],
    html5: true,
    format: ['MP3']
  });
  currentView = 1;
  prevView = 1;
  songList: any = [];
  ngOnInit() {
    // this.currentPlaying.play();
    this.musicDataService.getSongList().subscribe(
      res => this.songList = res,
      err => console.log(err)
    );
    this.musicDataService.fetchSongList();
    this.nowPlayingService.getNowPlaying().subscribe(
      res => {
        this.song.stop();
        this.song = new Howl(
        {
          src: [`/api/play?id=${res.id}`],
          html5: true,
          format: [res.format]
        }
      );
        this.song.play();
    }
    );
    this.song = new Howl(
      {
        src: [`/api/play?id=${this.nowPlayingService.nowPlaying.id}`],
        html5: true,
        format: [this.nowPlayingService.nowPlaying.format]
      }
    );
    this.nowPlayingService.getPlaying().subscribe(
      res => res ? this.song.play() : this.song.pause()
    );
    this.nowPlayingService.changeViewSubject.subscribe(
      res => {
        if (this.currentView === 2) {
          this.currentView = this.prevView;
        } else {
          this.prevView = this.currentView;
          this.currentView = 2;
        }
      }
    );
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
