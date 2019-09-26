import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  constructor(private http: HttpClient) { }
  songList: any = [];
  songListSubject = new Subject();
  fetchSongList() {
    return this.http.get('/api/songsList').subscribe(
      res => {
        this.songList = res;
        this.songListSubject.next(this.songList);
      },
      err => console.log(err)
    );
  }
  getSongList() {
    return this.songListSubject;
  }
}
