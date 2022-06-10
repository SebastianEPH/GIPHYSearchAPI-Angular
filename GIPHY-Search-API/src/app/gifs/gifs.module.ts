import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ShowComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
