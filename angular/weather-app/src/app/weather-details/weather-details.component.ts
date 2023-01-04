import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Areas, JSONResponse, list } from '../country';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailsComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  resultFound: boolean | undefined;
  location: string = '';
  currentWeather: list[] = [];

  calcTemp(temp: number) {
    return Math.round(temp - 273);
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.location = params['location'];
      this.getWeather(this.location);
    });
  }

  getWeather(location: string) {
    this.apiService.getWeather(location).subscribe(
      (res: JSONResponse) => {
        this.resultFound = true;

        console.log(res);
        this.currentWeather = res.list;
        console.log(this.currentWeather[0].dt_txt);

        console.log('current weather' + this.currentWeather);
      },
      () => {
        console.log('not found');

        this.resultFound = false;
      }
    );
  }
}
