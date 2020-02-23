export enum WeatherType {
    Sunny, Rain, Cloudy, Fog, Snow, Clouds
}


export class Weather {
    time: string;
    weather: string;
    temperature: string;

    constructor(
        time: string,
        weathertype: WeatherType,
        temperature: string
    ) {
        this.time = time;
        this.temperature = temperature;
        this.setType(weathertype);
    }

    setType(type: WeatherType) {
        switch (type) {
            case WeatherType.Sunny:
                this.weather = 'sunny';
                break;
            case WeatherType.Rain:
                this.weather = 'rain';
                break;
            case WeatherType.Cloudy:
                this.weather = 'cloudy';
                break;
            case WeatherType.Fog:
                this.weather = 'fog';
                break;
            case WeatherType.Snow:
                this.weather = 'snow';
                break;
            case WeatherType.Clouds:
            default:
                this.weather = 'clouds';
        }
    }

    img(): string {
        switch (this.weather) {
            case 'sunny':
                return 'assets/icons/sunny.png';
            case 'rain':
                return 'assets/icons/rain.png';
            case 'cloudy':
                return 'assets/icons/cloudy.png';
            case 'fog':
                return 'assets/icons/fog.png';
            case 'snow':
                return 'assets/icons/snow.png';
            case 'clouds':
            default:
                return 'assets/icons/clouds.png';
        }
    }
}

export class WeatherDetail {
    weather: Weather;
    humidity: string;
    wind: string;
    description: string;
    warnings: string[];
    min: number;
    high: number;
    mean: number;
}
