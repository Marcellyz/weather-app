import { faDroplet, faTemperatureFull, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { weatherDatas } from './../../../../models/intefaces/weatherDatas';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {

  @Input() weatherDatas!: weatherDatas; /* Dados da previsão do tempo recebidos pelo componente pai*/

  minTemperatureIcon = faTemperatureLow;
  maxTemperatueIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

}
