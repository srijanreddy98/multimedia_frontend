import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicPlayerComponent } from './pages/music/music-view.component';


const routes: Routes = [
  {
  path: 'music',
  component: MusicPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
