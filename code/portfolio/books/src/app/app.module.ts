import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardsCollectionComponent } from './cards-collection/cards-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsCollectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
