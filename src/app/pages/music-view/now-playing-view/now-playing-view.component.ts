import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-now-playing-view',
  templateUrl: './now-playing-view.component.html',
  styleUrls: ['./now-playing-view.component.scss']
})
export class NowPlayingViewComponent implements OnInit {

  @Output() songClicked: EventEmitter<any> = new EventEmitter();

  @Input() song: any = { artist : ['Spor'],
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

  ngOnInit() {
  }

}
