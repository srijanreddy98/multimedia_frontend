import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbIconModule } from '@nebular/theme';




@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NbIconModule,
  ],
  exports: [FooterComponent]
})
export class SharedModule { }
