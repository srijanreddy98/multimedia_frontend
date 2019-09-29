import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {
  playing = false;
  playingSubject = new Subject();
  nowPlayingSubject: Subject<any> = new Subject();
  changeViewSubject: Subject<any> = new Subject();
  nowPlaying: any = {
    id: 1,
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
  queue = [];
  queueSubject: Subject<any> = new Subject();
  constructor(private http: HttpClient) { }

  setNowPlaying(song) {
    console.log(song);
    this.nowPlaying = song;
    this.nowPlayingSubject.next(this.nowPlaying);
  }

  getNowPlaying() {
    return this.nowPlayingSubject;
  }

  getPlaying() {
    return this.playingSubject;
  }
  setPlaying(playing) {
    this.playing = playing;
    this.playingSubject.next(this.playing);
  }
  getPic(id) {
    return this.http.get('/api/pic?id=' + id);
  }

  changeView() {
    this.changeViewSubject.next();
  }
}
