import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerComponent } from './music-player.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NbListModule, NbUserModule, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [MusicPlayerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NbListModule,
    NbUserModule,
    NbCardModule
  ]
})
export class MusicPlayerModule {
  // public getJSON(): Observable<any> {
  //   return this.http.get('../../assets/music.json');
  // }
}
