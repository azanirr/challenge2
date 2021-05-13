import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MentorComponent } from './component/mentor/mentor.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalComponent } from './component/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ModalEditComponent } from './component/modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MentorComponent,
    ModalComponent,
    ModalEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
