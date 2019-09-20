import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerModule } from './music-view/music-view.module';
// import { MusicPlayerComponent } from './music-player/music-player.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MusicPlayerModule,
  ],
  exports: [MusicPlayerModule]
})
export class PagesModule { }
