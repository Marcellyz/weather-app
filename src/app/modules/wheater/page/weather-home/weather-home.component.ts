import { Weather } from './../../../../models/intefaces/weather';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {
  intialCityName = 'Recife';
  WeatherDatas !: Weather;

  constructor(private weatherService:WeatherService){}
  ngOnInit(): void {
    this.getWeatherDatas(this.intialCityName)
  }

  getWeatherDatas(cityName:string): void{
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next:(response) => {
        response && (this.WeatherDatas = response);
        console.log(this.WeatherDatas.name );

      },
      error: (error)=> console.log(error),

    })
  }
}
