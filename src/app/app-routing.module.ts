import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardmainComponent } from './components/cardmain/cardmain.component';

const routes: Routes = [
  {
    path: '',
    component: CardmainComponent,
    title: 'Frontend Mentor | Article preview component',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
