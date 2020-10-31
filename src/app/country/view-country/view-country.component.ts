import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {
  countryArray = [];
  name: any;
  countryObj:any = {};
  constructor(private route: ActivatedRoute, private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.getCountries();
  }

  getCountries() {
    this.apiService.getCountries().subscribe(res => {
      this.countryArray = res;
      this.countryObj = this.countryArray.find((ele, i) => {
        if (i == this.name) {
          return ele;
        }
      });
    });
  }

}
