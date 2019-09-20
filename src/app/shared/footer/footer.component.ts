import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
