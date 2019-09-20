import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbIconModule } from '@nebular/theme';
import { NowPlayingService } from '../services/now-playing.service';




@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NbIconModule,
  ],
  exports: [FooterComponent],
  providers: [NowPlayingService]
})
export class SharedModule { }
