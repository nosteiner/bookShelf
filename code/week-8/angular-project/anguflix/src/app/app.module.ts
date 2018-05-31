import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';


import { MoviesService } from './movies.service';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { MoviesComponent } from './movies/movies.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    MyCollectionComponent,
    MoviesComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
