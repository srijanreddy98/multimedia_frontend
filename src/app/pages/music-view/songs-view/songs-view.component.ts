import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-songs-view',
  templateUrl: './songs-view.component.html',
  styleUrls: ['./songs-view.component.scss']
})
export class SongsViewComponent implements OnInit {

  @Output() backClicked: EventEmitter<any> = new EventEmitter();
  @Output() songClicked: EventEmitter<any> = new EventEmitter();

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

  constructor() { }
  @Input() albumId = 0;
  ngOnInit() {
  }

  onBackSelected(e) {
    this.backClicked.emit(e);
    // console.log(e);
  }

  onSongClicked(e) {
    this.songClicked.emit(e);
    // console.log(e);
  }

}
