import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardsCollectionComponent } from './cards-collection/cards-collection.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';
import { FilterPipe } from './filter.pipe';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsCollectionComponent,
    EditDialogComponent,
    ToolbarComponent,
    RemoveDialogComponent,
    FilterPipe,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FontAwesomeModule,  
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  entryComponents: [EditDialogComponent, RemoveDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

