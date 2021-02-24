import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { DndModule } from 'ngx-drag-drop';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
/*Angular Material*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule,
  MatTabsModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatButtonModule,
  MatPaginatorModule
} from '@angular/material';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ShowDialogComponent } from './edit-app/show-dialog/show-dialog.component';
import { FormrenderComponent } from './formrender/formrender.component';
import { ManagementComponent } from './management/management.component';

const appRoutes: Routes = [
  { path: '', component: EditAppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EditAppComponent,
    NavComponent,
    HomeComponent,
    ShowDialogComponent,
    FormrenderComponent,
    ManagementComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    SweetAlert2Module.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  entryComponents: [ShowDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
