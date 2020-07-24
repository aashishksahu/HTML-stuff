import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) {

  }

  test(){
    return this.http.get("https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-15&sortBy=publishedAt&apiKey=936bcf307ccd4892bb54f54486a1c6fd");
  }


  
}
