import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemovingDuplicateComponent } from './removing-duplicate/removing-duplicate.component';
import { RemovingSubsetComponent } from './removing-subset/removing-subset.component';
import { AppComponent } from './app.component';
import { GroupingDataComponent } from './grouping-data/grouping-data.component';
import { RolesComponent } from './roles/roles.component';
const routes: Routes = [
  {path:' ',component: AppComponent},
  {path:'remove duplicated users',component:RemovingDuplicateComponent },
  {path:'remove subset users',component:RemovingSubsetComponent },
  {path:'grouping  data',component:GroupingDataComponent },
  {path:'roles',component:RolesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
