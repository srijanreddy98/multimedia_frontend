import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {
  nowPlayingSubject: Subject<any> = new Subject();
  nowPlaying = {
    songName: 'Might Little Man',
    artist: 'Steve Burns',
    album: 'Young Sheldon',
    songInfo: {}
  };
  queue = [];
  queueSubject: Subject<any> = new Subject();
  constructor() { }

  setNowPlaying() {
    this.nowPlaying.songName = 'Buddhu sa maan';
    this.nowPlayingSubject.next(this.nowPlaying);
  }

  getNowPlaying() {
    return this.nowPlayingSubject;
  }
}
