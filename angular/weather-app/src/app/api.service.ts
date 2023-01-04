import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Areas, JSONResponse, link } from './country';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getCountry(href: string) {
    return this.httpClient.get<Areas>(href + 'images/');
  }

  API_URL = 'https://api.teleport.org/api/urban_areas';
  API_KEY = 'dbd3b02d8958d62185d02e944cd5f522';
  apiUrl =
    'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&APPID=b9ff3b3708c8ca1d2c46009a94cf428d';
  params = {};

  constructor(private httpClient: HttpClient) {}

  //Return a All Country List
  getAllCountries() {
    return this.httpClient.get<link>(`${this.API_URL}`);
  }
  getWeather(capitalCodeString: string) {
    return this.httpClient.get<JSONResponse>(
      'https://api.openweathermap.org/data/2.5/forecast?cnt=7&q=' +
        capitalCodeString +
        '&appid=' +
        this.API_KEY
    );
  }
}
