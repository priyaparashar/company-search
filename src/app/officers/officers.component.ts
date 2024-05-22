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
  "items": [{
    "address": {
        "premises": "1-3",
        "postal_code": "WC2N 5JR",
        "country": "England",
        "locality": "London",
        "address_line_1": "Strand"
    },
    "name": "RE SECRETARIES LIMITED",
    "appointed_on": "2021-08-25",
    "officer_role": "corporate-secretary",
    "links": {
        "officer": {
            "appointments": "/officers/9mfd0k0hpC6vIQd5SYXYzhoYmpA/appointments"
        }
    }
}, {
    "address": {
        "premises": "Global Reach",
        "postal_code": "CF11 0SN",
        "country": "United Kingdom",
        "locality": "Cardiff",
        "address_line_1": "Dunleavy Drive"
    },
    "name": "ELLIOT, Stephen",
    "appointed_on": "2021-09-14",
    "officer_role": "director",
    "links": {
        "officer": {
            "appointments": "/officers/mPcNKeaykPbwQN-40ESRq1uRpXE/appointments"
        }
    },
    "date_of_birth": {
        "month": 6,
        "year": 1970
    },
    "occupation": "Managing Director",
    "country_of_residence": "England",
    "nationality": "British"
}, {
    "address": {
        "premises": "Quadrant House",
        "postal_code": "SM2 5AS",
        "country": "United Kingdom",
        "locality": "Sutton",
        "region": "Surrey",
        "address_line_1": "The Quadrant"
    },
    "name": "KELSEY, Mark Vickers",
    "appointed_on": "2021-08-25",
    "officer_role": "director",
    "links": {
        "officer": {
            "appointments": "/officers/ePw0rm4m0ZYsA0A8v6nC1IvlsXI/appointments"
        }
    },
    "date_of_birth": {
        "month": 4,
        "year": 1960
    },
    "occupation": "Director",
    "country_of_residence": "United Kingdom",
    "nationality": "British"
}, {
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
    "nationality": "American",
    "resigned_on": "2021-08-25"
}, {
    "address": {
        "premises": "The Leeming Building",
        "postal_code": "LS2 7JF",
        "country": "England",
        "locality": "Leeds",
        "address_line_1": "Vicar Lane"
    },
    "name": "LORD, John Michael",
    "appointed_on": "2016-06-20",
    "officer_role": "director",
    "links": {
        "officer": {
            "appointments": "/officers/p70n9hx814uWm_6IgL1lmWgMhaA/appointments"
        }
    },
    "date_of_birth": {
        "month": 1,
        "year": 1967
    },
    "occupation": "Ceo",
    "country_of_residence": "England",
    "nationality": "British",
    "resigned_on": "2021-08-25"
}, {
    "address": {
        "premises": "Quadrant House",
        "postal_code": "SM2 5AS",
        "country": "United Kingdom",
        "locality": "Sutton",
        "region": "Surrey",
        "address_line_1": "The Quadrant"
    },
    "name": "O'SULLIVAN, Jamie Andrew",
    "appointed_on": "2021-08-25",
    "officer_role": "director",
    "links": {
        "officer": {
            "appointments": "/officers/wzKgYxdmvNB525PaXivK4rLsVg4/appointments"
        }
    },
    "date_of_birth": {
        "month": 5,
        "year": 1971
    },
    "occupation": "Chief Finance Officer",
    "country_of_residence": "United Kingdom",
    "nationality": "British",
    "resigned_on": "2022-01-11"
}, {
    "address": {
        "premises": "The Leeming Building",
        "postal_code": "LS2 7JF",
        "country": "England",
        "locality": "Leeds",
        "address_line_1": "Vicar Lane"
    },
    "name": "SMITH, Lawrence Carleton",
    "appointed_on": "2016-06-20",
    "officer_role": "director",
    "links": {
        "officer": {
            "appointments": "/officers/RMwT2DI9GZ1Kdq7BNASChWIu5vo/appointments"
        }
    },
    "date_of_birth": {
        "month": 10,
        "year": 1964
    },
    "occupation": "Executive",
    "country_of_residence": "United States",
    "nationality": "American",
    "resigned_on": "2021-08-25"
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

