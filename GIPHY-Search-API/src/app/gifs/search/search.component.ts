import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GifService} from "../services/gif.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent {

  constructor(private gifServices:GifService) {
  }
  @ViewChild("txtSearch") txtSearch!:ElementRef<HTMLInputElement>;
  search(text:String){
    // if (event.code === "Enter"){
    //   console.log("se oprimió enter [pexxx")
    // }
    // console.log(event.key)
    // console.log("se oprimio el enter pex",text )
    // console.log(this.txtSearch)
    const value  =  this.txtSearch.nativeElement.value.trim().toLowerCase()
    // console.log("value: ", value)

    if(value.length !== 0){
      this.gifServices.searchGif(value)
    }
    this.txtSearch.nativeElement.value = ""
  }
}
