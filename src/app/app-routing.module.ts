import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { FormrenderComponent } from './formrender/formrender.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'EditForm', component: EditAppComponent},
  { path: 'Render', component: FormrenderComponent},
  { path: 'Management', component: ManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
