import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { Company } from '../results/results.component';
import { SearchResultsService } from '../search-results.service';
export interface OfficerResponse {
  etag: string;
  links: {
    self: string;
  };
  kind: string;
  items_per_page: number;
  items: Officer[];
}

export interface Officer {
  address: {
    premises: string;
    postal_code: string;
    country: string;
    locality: string;
    address_line_1: string;
  };
  name: string;
  appointed_on: string;
  officer_role: string;
  links: {
    officer: {
      appointments: string;
    }
  };
  date_of_birth: {
    month: number;
    year: number;
  };
  occupation: string;
  country_of_residence: string;
  nationality: string;
}
const mockOfficersResponse = {
  "etag": "6dd2261e61776d79c2c50685145fac364e75e24e",
  "links": {
      "self": "/company/10241297/officers"
  },
  "kind": "officer-list",
  "items_per_page": 35,
  "items": [
      {
          "address": {
              "premises": "The Leeming Building",
              "postal_code": "LS2 7JF",
              "country": "England",
              "locality": "Leeds",
              "address_line_1": "Vicar Lane"
          },
          "name": "ANTLES, Kerri",
          "appointed_on": "2017-04-01",
          "officer_role": "director",
          "links": {
              "officer": {
                  "appointments": "/officers/4R8_9bZ44w0_cRlrxoC-wRwaMiE/appointments"
              }
          },
          "date_of_birth": {
              "month": 6,
              "year": 1969
          },
          "occupation": "Finance And Accounting",
          "country_of_residence": "United States",
          "nationality": "American"
      },
      {
        "address": {
            "premises": "The Leeming Building",
            "postal_code": "LS2 7JF",
            "country": "England",
            "locality": "Leeds",
            "address_line_1": "Vicar Lane"
        },
        "name": "Jone Doe",
        "appointed_on": "2017-04-01",
        "officer_role": "secretary",
        "links": {
            "officer": {
                "appointments": "/officers/4R8_9bZ44w0_cRlrxoC-wRwaMiE/appointments"
            }
        },
        "date_of_birth": {
            "month": 6,
            "year": 1969
        },
        "occupation": "Finance And Accounting",
        "country_of_residence": "United States",
        "nationality": "American"
    }]
}
@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.scss']
})
export class OfficersComponent implements OnInit {
  company: Company | undefined;
  companyId: string | undefined;
  officers: any[] | undefined;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private searchResultsService: SearchResultsService) { }

  ngOnInit(): void {
    this.company  = this.searchResultsService.getData()
    this.companyId = this.route.snapshot.paramMap.get('id') || ''
    this.searchService.getCompanyOfficers(this.companyId ).subscribe((response: any) => {
      this.officers = response.items;
    }, (error: any) => {
      console.error('Error fetching data:', error);
      this.officers = mockOfficersResponse.items
    });
  }

}

