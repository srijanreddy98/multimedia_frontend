import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerComponent } from './music-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NbListModule, NbUserModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { AlbumViewComponent } from './album-view/album-view.component';
import { SongsViewComponent } from './songs-view/songs-view.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [MusicPlayerComponent, AlbumViewComponent, SongsViewComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NbListModule,
    NbUserModule,
    NbCardModule,
    NbEvaIconsModule,
    NbIconModule
  ]
})
export class MusicPlayerModule {
}
