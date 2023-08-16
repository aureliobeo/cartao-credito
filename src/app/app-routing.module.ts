import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InteractiveCardComponent } from './interactive-card/interactive-card.component';

const routes: Routes = [
  { path: '', component: InteractiveCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
