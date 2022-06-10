import { Component, OnInit } from '@angular/core';
import {GifService} from "../services/gif.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styles: [
  ]
})
export class ShowComponent{

  get result(){
    return this.gifServices.result
  }
  constructor(private gifServices:GifService) {

  }



}
