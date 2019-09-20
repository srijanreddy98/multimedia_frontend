import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerModule } from './music-player/music-player.module';
// import { MusicPlayerComponent } from './music-player/music-player.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MusicPlayerModule
  ],
  exports: [MusicPlayerModule]
})
export class PagesModule { }
