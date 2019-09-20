import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbIconModule, NbToggleModule, NbListModule } from '@nebular/theme';
import { NowPlayingService } from '../services/now-playing.service';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NbIconModule,
    NbToggleModule,
    NbListModule
  ],
  exports: [FooterComponent, HeaderComponent, SidebarComponent],
  providers: [NowPlayingService]
})
export class SharedModule { }
