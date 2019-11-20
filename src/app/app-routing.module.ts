import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { ContactComponent } from './main/contact/contact.component';
import { BioComponent } from './main/bio/bio.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'bio',
    component: BioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
