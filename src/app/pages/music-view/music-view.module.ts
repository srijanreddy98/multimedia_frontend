import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerComponent } from './music-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NbListModule, NbUserModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { AlbumViewComponent } from './album-view/album-view.component';
import { SongsViewComponent } from './songs-view/songs-view.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NowPlayingViewComponent } from './now-playing-view/now-playing-view.component';
import { MusicDataService } from 'src/app/services/music-data.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MusicPlayerComponent, AlbumViewComponent, SongsViewComponent, NowPlayingViewComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NbListModule,
    NbUserModule,
    NbCardModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    FormsModule
  ],
  providers: [MusicDataService]
})
export class MusicPlayerModule {
}
