import { Injectable } from '@angular/core';
import {query} from "@angular/animations";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Gif, SearchGIFResponse} from "../interfaces/gifs.interface";

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private _apiKey: String = ''
  private _history:String[] = []
  public result:Gif[] = []

  constructor(private http:HttpClient) {
    this._apiKey = 'uQbTiJoo6w2fXq2TTPFC4LzChno28F09'
  }
  get history():String[]{
    return [...this._history];
  }

  searchGif(query:string = ''){

    if(!this._history.includes(query)){
      this._history.unshift(query)
      // cut array
      this._history = this._history.splice(0,10)
    }
    console.log(this.history)

    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${query}&limit=10`)
      .subscribe((resp)=>{
        console.log(resp.data)
        this.result = resp.data;
      })

    // method async
    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key='+this._apiKey+'&q=amor&limit=10');
    // const data = await resp.json();
    // console.log(data)


    // method fetch
    // fetch('https://api.giphy.com/v1/gifs/search?api_key='+this._apiKey+'&q=amor&limit=10')
    //   .then(resp=>{
    //     console.log('respondio pex')
    //     resp.json().then(data=>{
    //       console.log('esto es la data ', data)
    //     })
    //   })

  }



  setHistory():void{

  }
  delAllHistory():void{
    this._history = []
  }
  delOnlyHistory(item:String):void{
    const index = this._history.indexOf(item)
    this._history.splice(index, 1)
  }


}
