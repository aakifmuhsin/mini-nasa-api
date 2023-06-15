import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoverdataComponent } from './roverdata/roverdata.component';
import { RecentupdatesComponent } from './recentupdates/recentupdates.component';
import { ImageComponent } from './image/image.component';
import { AstroidsComponent } from './astroids/astroids.component';

const routes: Routes = [
  { path: '', component: RecentupdatesComponent },
  { path: 'rover', component: RoverdataComponent },
  { path: 'image', component: ImageComponent },
  { path: 'astroids', component: AstroidsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
