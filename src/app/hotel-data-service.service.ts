import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelDataServiceService {

  constructor(private http : HttpClient) { }
  /* get request and  */
  getHotelData(){
    return this.http.get('https://my-json-server.typicode.com/PiuMaheshi/pApp');
  }
}
