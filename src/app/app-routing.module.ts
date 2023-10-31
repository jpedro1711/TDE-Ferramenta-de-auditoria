import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ChecklistDetailsComponent } from './components/checklist-details/checklist-details.component';

const routes: Routes = [
  { path: '', component: ChecklistComponent },
  { path: 'seeItemDetails/:id', component: ChecklistDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
