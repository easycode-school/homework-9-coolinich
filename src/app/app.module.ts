import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeSortComponent } from './components/pipe-sort/pipe-sort.component';
import { PipeFormatDateComponent } from './components/pipe-format-date/pipe-format-date.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { SortArrayPipe } from './pipes/sort-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeSortComponent,
    PipeFormatDateComponent,
    FormatDatePipe,
    SortArrayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
