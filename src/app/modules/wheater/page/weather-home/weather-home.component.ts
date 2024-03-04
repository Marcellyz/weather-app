import { Component, OnInit, OnDestroy } from '@angular/core';
import { weatherDatas } from 'src/app/models/intefaces/weatherDatas';
import { WeatherService } from './../../services/weather.service';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  weatherDatas!: weatherDatas;
  initialCityName = 'Recife';
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}


  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)

      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          if (response) {
            this.weatherDatas = response;
            console.log(this.weatherDatas);

          }
        },
      });
  }

  onSubmit():void{
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

