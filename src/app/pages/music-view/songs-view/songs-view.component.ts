import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NowPlayingService } from 'src/app/services/now-playing.service';
import { MusicDataService } from 'src/app/services/music-data.service';


@Component({
  selector: 'app-songs-view',
  templateUrl: './songs-view.component.html',
  styleUrls: ['./songs-view.component.scss']
})
export class SongsViewComponent implements OnInit {

  @Output() backClicked: EventEmitter<any> = new EventEmitter();
  @Output() songClicked: EventEmitter<any> = new EventEmitter();
  showingSongs = [];
  @Input() set songsInp(val) {
    this.songs = val;
    this.showingSongs = val;
  }

  songs = [
    {
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
    },
    {
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
    },
    {
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
    }
  ];
  constructor(private nowPlayingService: NowPlayingService) { }
  @Input() albumId = 0;
  ngOnInit() {
    this.showingSongs = [...this.songs];
  }

  onBackSelected(e) {
    this.backClicked.emit(e);
    // console.log(e);
  }

  onSongClicked(e) {
    this.nowPlayingService.setNowPlaying(e);
    this.nowPlayingService.setPlaying(true);
    this.songClicked.emit(e);
    // console.log(e);
  }

  searchText(v) {
    if (v === '') {
      console.log('a');
      this.showingSongs = [...this.songs];
      return;
    }
    const ex = new RegExp('\\b' + v, 'i');
    this.showingSongs = this.songs.filter((a) => {
      return a.data.title.match(ex) !== null ? true : false;
    });
  }

}
