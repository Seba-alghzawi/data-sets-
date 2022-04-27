import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemovingSubsetComponent } from './removing-subset/removing-subset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RemovingDuplicateComponent } from './removing-duplicate/removing-duplicate.component';
import { GroupingDataComponent } from './grouping-data/grouping-data.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RolesComponent } from './roles/roles.component';
import {MatSelectModule} from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    RemovingSubsetComponent,
    RemovingDuplicateComponent,
    GroupingDataComponent,
    HeaderComponent,
    RolesComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatDividerModule,
     MatButtonModule,
     HttpClientModule,
     ReactiveFormsModule,
     MatSelectModule,
     NgxMatSelectSearchModule,
     FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
