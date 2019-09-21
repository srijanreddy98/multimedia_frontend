import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  constructor(private http: HttpClient) { }

  getSongList(): Observable<any> {
    return this.http.get('/api/songsList');
  }
}
