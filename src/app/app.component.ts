import { Component } from '@angular/core';
import {HotelDataServiceService} from './hotel-data-service.service';
import {hotel} from './hotelDataModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = ['red','blue'];
  hotels: hotel[];
  constructor (private hotelServise:HotelDataServiceService){
    this.hotelServise.getHotelData();
  }
   
}
