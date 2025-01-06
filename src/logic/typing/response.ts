interface Coord {
    lon: number;
    lat: number;
  }

  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

 export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }

  interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }

  interface Clouds {
    all: number;
  }

  interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }

  export interface WeatherResponse {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }

  const posts_Types: Record<string, WeatherResponse> = {
    "1": {
      coord: { lon: 27.5667, lat: 53.9 },
      weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
      base: "stations",
      main: {
        temp: 10.86,
        feels_like: 9.25,
        temp_min: 10.86,
        temp_max: 10.86,
        pressure: 1033,
        humidity: 48,
        sea_level: 1033,
        grnd_level: 1006
      },
      visibility: 10000,
      wind: { speed: 1.49, deg: 223, gust: 1.66 },
      clouds: { all: 0 },
      dt: 1729431070,
      sys: { type: 1, id: 8939, country: "BY", sunrise: 1729399626, sunset: 1729436492 },
      timezone: 10800,
      id: 625144,
      name: "Minsk",
      cod: 200
    }
  };
