export interface Weather {

  coord: {
    lat: number,
    lon: number,
  }

  weather: [
    {
      id:number,
      main: string,
      description: string,
      icon: string,
    }
  ],

  base: string,

  main:{
        temp: number,
        temp_max:number,
        temp_min: number,
        pressure: number,
        humidity: number,
        feels_like:number,
      },

  visibility: number,

  wind: {
    deg: number,
    speed: number,
  }

  clouds: {
    all: number,
  }

  dt:number,
  id:number,
  name: string,
  timezone: number,
  cod: number,

  sys: {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number,
  }
}
