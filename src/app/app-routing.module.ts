import { AboutViewComponent } from './views/about-view/about-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeViewComponent  },
  { path: 'about', component: AboutViewComponent  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}
