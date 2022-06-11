import { Component, OnInit } from '@angular/core';
import {GifService} from "../../gifs/services/gif.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent {

  constructor(private gifService:GifService ) {
  }

  setSearch(item:string, e:Event){
    e.preventDefault()

    console.log('se obtuvo el item',item)
    this.gifService.searchGif(item)
  }
  get history ():string[]{
    return this.gifService.history;
  }
  deleteHistory():void{
    this.gifService.delAllHistory()
  }

}
