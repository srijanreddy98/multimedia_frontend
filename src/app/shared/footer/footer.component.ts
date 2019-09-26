import { Component, OnInit, Input } from '@angular/core';
import { NowPlayingService } from 'src/app/services/now-playing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  picUrl = '/assets/album_placeholder.jpeg';
  songName = 'Mighty Little Man';
  artist = 'Steve Burns';
  id = 1;
  songData =  {};
  playing: any = false;
  constructor(private nowPlayingService: NowPlayingService) { }

  ngOnInit() {
    this.nowPlayingService.getNowPlaying().subscribe(
      res => {
        this.songName = res.data.title;
        this.artist = res.data.artist;
        this.id = res.id;
      }
    );
    this.songName = this.nowPlayingService.nowPlaying.data.title;
    this.artist = this.nowPlayingService.nowPlaying.data.artist.join(', ');
    this.nowPlayingService.getPlaying().subscribe(
      res => this.playing = res
    );
    this.playing = this.nowPlayingService.playing;
  }

  trigger() {
    this.nowPlayingService.setPlaying(!this.playing);
  }

  changeView() {
    this.nowPlayingService.changeView();
  }

}
