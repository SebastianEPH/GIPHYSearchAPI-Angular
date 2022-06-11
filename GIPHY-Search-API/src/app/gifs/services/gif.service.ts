import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchGIFResponse} from "../interfaces/gifs.interface";

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private _apiKey: string = ''
  private _history:string[] = []
  private _baseUrl:string  = ''
  public result:Gif[] = []

  constructor(private http:HttpClient) {
    this._baseUrl = 'https://api.giphy.com/v1/gifs';
    this._apiKey = 'uQbTiJoo6w2fXq2TTPFC4LzChno28F09' // set your apikey
    this._history = JSON.parse(localStorage.getItem('history')!) || []
    this.result = JSON.parse(localStorage.getItem('result')!) || []
  }
  get history():string[]{
    return [...this._history];
  }

  searchGif(query:string = ''){

    if(!this._history.includes(query)){
      this._history.unshift(query)
      // cut array
      this._history = this._history.splice(0,10)
      localStorage.setItem('history', JSON.stringify(this._history))
    }
    console.log(this.history)

    const params = new HttpParams()
      .set('api_key',this._apiKey)
      .set('q', query)
      .set('limit','10');
    console.log('params ',params.toString())
    this.http.get<SearchGIFResponse>(`${this._baseUrl}/search`, {params})
      .subscribe((resp)=>{
        console.log(resp.data)
        this.result = resp.data;
        localStorage.setItem('result', JSON.stringify(this.result))
      })

    // method async
    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key='+this._apiKey+'&q=query&limit=10');
    // const data = await resp.json();
    // console.log(data)

    // method fetch
    // fetch('https://api.giphy.com/v1/gifs/search?api_key='+this._apiKey+'&q=query&limit=10')
    //   .then(resp=>{
    //     resp.json().then(data=>{
    //     })
    //   })

  }

  setHistory():void{

  }
  delAllHistory():void{
    this._history = []
    this.result = []
    localStorage.removeItem('history')
    localStorage.removeItem('result')
  }
  delOnlyHistory(item:string):void{
    const index = this._history.indexOf(item)
    this._history.splice(index, 1)
  }


}
