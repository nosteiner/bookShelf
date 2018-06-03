import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

import { MoviesService } from './movies.service';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { MoviesComponent } from './movies/movies.component';
import { CardComponent } from './card/card.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    MyCollectionComponent,
    MoviesComponent,
    CardComponent,
    FilterPipe,


    
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    AngularFontAwesomeModule,
    FormsModule

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
