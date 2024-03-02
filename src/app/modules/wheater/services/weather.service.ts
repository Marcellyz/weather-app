import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '2e8387407ffe90200af0ea24995e28fa';

  constructor(private http: HttpClient) { }
  getWeatherDatas(cityName:string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&unit=metric&mode=json&appid=${this.apiKey}`, {})
  }
}
