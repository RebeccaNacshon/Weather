import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { ApiService } from '../api.service';
import { Areas, Country, link, locationInfo } from '../country';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  countriesJson: Object | undefined;
  result: Areas[] | undefined;
  resultArr: locationInfo[] = [];
  locationObj: locationInfo = { image: '', name: '' };
  location: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getCountries();
  }

  onInput(event: any) {
    this.location = String(event.target.value);
  }
  getCountries() {
    this.apiService.getAllCountries().subscribe((res: link) => {
      this.countriesJson = JSON.stringify(res);
      res._links['ua:item'].forEach((element) => {
        this.apiService
          .getCountry(element.href)
          .subscribe((placeRes: Areas) => {
            {
              console.log(placeRes.photos[0].image.web);
              this.locationObj = {
                image: placeRes.photos[0].image.web,
                name: element.name,
              };
              this.resultArr.push(this.locationObj);
            }
          });
      });
    });

    console.log(this.resultArr);
  }
  checkWeatherFromInput() {
    console.log('country' + this.location);

    this.router.navigateByUrl('weather/' + this.location);
  }

  checkWeather(country: string) {
    console.log('country' + country);

    this.router.navigateByUrl('weather/' + country);
  }
}
