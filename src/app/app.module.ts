import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetalComponent } from './book-detal/book-detal.component';
import { BookMasterComponent } from './book-master/book-master.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDataService } from './book-data.service';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookDetalComponent,
    BookMasterComponent,
    EditComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
