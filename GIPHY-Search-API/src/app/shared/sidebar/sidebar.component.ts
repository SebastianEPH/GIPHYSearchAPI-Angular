import { Component, OnInit } from '@angular/core';
import {GifService} from "../../gifs/services/gif.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent { // implements OnInit {


  constructor(private gifService:GifService ) {
  }

  // ngOnInit(): void {
  // }

  get history ():String[]{
    return this.gifService.history;
  }

}
