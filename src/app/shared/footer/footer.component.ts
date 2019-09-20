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
  songData =  {};
  constructor(private nowPlayingService: NowPlayingService) { }

  ngOnInit() {
    this.nowPlayingService.getNowPlaying().subscribe(
      res => {
        this.songName = res.songName;
        this.artist = res.artist;
      }
    );
  }

  trigger() {
    this.nowPlayingService.setNowPlaying();
  }

}
