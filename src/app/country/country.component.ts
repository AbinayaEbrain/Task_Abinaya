import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countryArray = [];
  p: number = 1;
  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.apiService.getCountries().subscribe(res => {
      this.countryArray = res;
    });
  }

  view(id) {
    this.router.navigate(['/viewCountry' + '/' + id]);
  }

}
