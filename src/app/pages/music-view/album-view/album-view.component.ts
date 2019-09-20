import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit {
  @Output() albumClicked: EventEmitter<any> = new EventEmitter();
  albumns = [
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
  }
  onAlbumSelected(id) {
    this.albumClicked.emit(id);
  }
}
