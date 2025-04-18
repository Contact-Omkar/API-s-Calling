import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  constructor(private httpclient:HttpClient){

  }
  getalldata():Observable<any>{
  return  this.httpclient.get("https://dummyjson.com/todos")
  }
}
