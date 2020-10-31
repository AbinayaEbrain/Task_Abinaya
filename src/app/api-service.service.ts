import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private getCountry = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<any>(this.getCountry);
  }

  getCountriesById(id) {
    return this.http.get<any>(this.getCountry + '/' + id);
  }
}
