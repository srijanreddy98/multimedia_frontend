import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NowPlayingService } from 'src/app/services/now-playing.service';

@Component({
  selector: 'app-now-playing-view',
  templateUrl: './now-playing-view.component.html',
  styleUrls: ['./now-playing-view.component.scss']
})
export class NowPlayingViewComponent implements OnInit {

  @Output() songClicked: EventEmitter<any> = new EventEmitter();

  song: any = {
    data: {
      artist : ['Spor'],
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
  };

  constructor(private nowPlayingService: NowPlayingService) { }

  ngOnInit() {
    this.nowPlayingService.getNowPlaying().subscribe(
      res => this.song = res
    );
    this.song = this.nowPlayingService.nowPlaying;
  }

}
