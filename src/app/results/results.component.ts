import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';
export interface Company {
  company_status: string;
  address_snippet: string;
  date_of_creation: string;
  date_of_cessation?: string;
  matches: {
    title: number[];
  };
  description: string;
  links: {
    self: string;
  };
  company_number: string;
  title: string;
  company_type: string;
  address: {
    premises: string;
    postal_code: string;
    country?: string;
    locality?: string;
    region?: string;
    address_line_1: string;
    address_line_2?: string;
  };
  kind: string;
  description_identifier: string[];
}
interface SearchResponse {
  page_number: number;
  kind: string;
  total_results: number;
  items: Company[];
} 
const mockResponse:SearchResponse = {
  "page_number": 1,
  "kind": "search#companies",
  "total_results": 20,
  "items": [
    {
      "company_status": "active",
      "address_snippet": "Boswell Cottage Main Street, North Leverton, Retford, England, DN22 0AD",
      "date_of_creation": "2008-02-11",
      "matches": {
          "title": [1, 3]
      },
      "description": "06500244 - Incorporated on 11 February 2008",
      "links": {
          "self": "/company/06500244"
      },
      "company_number": "06500244",
      "title": "BBC LIMITED",
      "company_type": "ltd",
      "address": {
          "premises": "Boswell Cottage Main Street",
          "postal_code": "DN22 0AD",
          "country": "England",
          "locality": "Retford",
          "address_line_1": "North Leverton"
      },
      "kind": "searchresults#company",
      "description_identifier": ["incorporated-on"]
  }, {
      "company_status": "active",
      "address_snippet": "Unit 2 Restormel Estate, Liddicoat Road, Lostwithiel, Cornwall, PL22 0HG",
      "date_of_creation": "2011-02-07",
      "matches": {
          "title": [1, 3]
      },
      "description": "07520089 - Incorporated on  7 February 2011",
      "links": {
          "self": "/company/07520089"
      },
      "company_number": "07520089",
      "title": "BBC AND CO LIMITED",
      "company_type": "ltd",
      "address": {
          "premises": "Unit 2",
          "postal_code": "PL22 0HG",
          "locality": "Lostwithiel",
          "region": "Cornwall",
          "address_line_1": "Restormel Estate",
          "address_line_2": "Liddicoat Road"
      },
      "kind": "searchresults#company",
      "description_identifier": ["incorporated-on"]
  }, {
      "company_status": "active",
      "address_snippet": "Suite 4 Second Floor Honeycomb, Edmund Street, Liverpool, England, L3 9NG",
      "date_of_creation": "2015-07-03",
      "matches": {
          "title": [1, 3]
      },
      "description": "09670032 - Incorporated on  3 July 2015",
      "links": {
          "self": "/company/09670032"
      },
      "company_number": "09670032",
      "title": "BBC AESTHETICS LIMITED",
      "company_type": "ltd",
      "address": {
          "premises": "Suite 4",
          "postal_code": "L3 9NG",
          "country": "England",
          "locality": "Liverpool",
          "address_line_1": "Second Floor Honeycomb",
          "address_line_2": "Edmund Street"
      },
      "kind": "searchresults#company",
      "description_identifier": ["incorporated-on"]
  }, {
      "company_status": "dissolved",
      "address_snippet": "30 Chalcot Grove, Birmingham, England, B20 1HJ",
      "date_of_creation": "2020-07-23",
      "matches": {
          "title": [1, 3]
      },
      "description": "12763638 - Dissolved on 12 September 2023",
      "links": {
          "self": "/company/12763638"
      },
      "company_number": "12763638",
      "title": "BBC & GLAZING LTD",
      "company_type": "ltd",
      "address": {
          "premises": "30",
          "postal_code": "B20 1HJ",
          "country": "England",
          "locality": "Birmingham",
          "address_line_1": "Chalcot Grove"
      },
      "kind": "searchresults#company",
      "description_identifier": ["dissolved-on"],
      "date_of_cessation": "2023-09-12"
  }, {
      "company_status": "dissolved",
      "address_snippet": "2 Longwood Hall, Bingley, W. Yorks, England, BD16 2RX",
      "date_of_creation": "2010-04-07",
      "matches": {
          "title": [1, 3]
      },
      "description": "07215276 - Dissolved on 21 May 2024",
      "links": {
          "self": "/company/07215276"
      },
      "company_number": "07215276",
      "title": "BBC APPLICATIONS LIMITED",
      "company_type": "ltd",
      "address": {
          "premises": "2",
          "postal_code": "BD16 2RX",
          "country": "England",
          "locality": "Bingley",
          "region": "W. Yorks",
          "address_line_1": "Longwood Hall"
      },
      "kind": "searchresults#company",
      "description_identifier": ["dissolved-on"],
      "date_of_cessation": "2024-05-21"
  }, {
      "company_status": "active",
      "address_snippet": "3f1 Third Floor, 3 Hill Street, Edinburgh, Scotland, EH2 3JP",
      "date_of_creation": "2023-09-21",
      "matches": {
          "title": [1, 3]
      },
      "description": "SC783452 - Incorporated on 21 September 2023",
      "links": {
          "self": "/company/SC783452"
      },
      "company_number": "SC783452",
      "title": "BBC A24 LTD",
      "company_type": "ltd",
      "address": {
          "premises": "3f1",
          "postal_code": "EH2 3JP",
          "country": "Scotland",
          "locality": "Edinburgh",
          "address_line_1": "Third Floor, 3 Hill Street"
      },
      "kind": "searchresults#company",
      "description_identifier": ["incorporated-on"]
  }, {
      "company_status": "liquidation",
      "address_snippet": "602/604  Seven Sisters Road, London, N15 6HT",
      "date_of_creation": "1980-02-27",
      "matches": {
          "title": [1, 6]
      },
      "description": "01481686 - Incorporated on 27 February 1980 - Liquidation",
      "links": {
          "self": "/company/01481686"
      },
      "company_number": "01481686",
      "title": "B.B.C. BATHROOMS LIMITED",
      "company_type": "ltd",
      "address": {
          "premises": "602/604 ",
          "postal_code": "N15 6HT",
          "address_line_1": "Seven Sisters Road",
          "address_line_2": "London"
      },
      "kind": "searchresults#company",
      "description_identifier": ["incorporated-on", "liquidation"]
  }, {
      "company_status": "dissolved",
      "address_snippet": "67 Westow Street, Upper Norwood, London, SE19 3RW",
      "date_of_creation": "2002-09-24",
      "matches": {
          "title": [1, 5]
      },
      "description": "04543129 - Dissolved on 23 April 2024",
      "links": {
          "self": "/company/04543129"
      },
      "company_number": "04543129",
      "title": "B.B.C (BIG BEN CONSULTING) GROUP LTD",
      "company_type": "ltd",
      "address": {
          "premises": "67",
          "postal_code": "SE19 3RW",
          "locality": "London",
          "address_line_1": "Westow Street",
          "address_line_2": "Upper Norwood"
      },
      "kind": "searchresults#company",
      "description_identifier": ["dissolved-on"],
      "date_of_cessation": "2024-04-23"
  }, {
      "company_status": "active",
      "address_snippet": "23 West Close, London, England, N9 9QR",
      "date_of_creation": "2022-03-28",
      "matches": {
          "title": [1, 3]
      },
      "description": "14006528 - Incorporated on 28 March 2022",
      "links": {
          "self": "/company/14006528"
      },
      "company_number": "14006528",
      "title": "BBC - BLESSING BEAUTY COSMETICS LIMITED",
      "company_type": "ltd",
      "address": {
          "premises": "23",
          "postal_code": "N9 9QR",
          "country": "England",
          "locality": "London",
          "address_line_1": "West Close"
      },
      "kind": "searchresults#company",
      "description_identifier": ["incorporated-on"]
  }, {
      "company_status": "dissolved",
      "address_snippet": "C/O Begbies Traynor, 3rd Floor Castlemead, Lower Castle Street, Bristol, BS1 3AG",
      "date_of_creation": "2010-03-24",
      "matches": {
          "title": [1, 3]
      },
      "description": "07201733 - Dissolved on 17 February 2024",
      "links": {
          "self": "/company/07201733"
      },
      "company_number": "07201733",
      "title": "BBC (BRISTOL) CLUB LIMITED",
      "company_type": "private-limited-guarant-nsc",
      "address": {
          "premises": "C/O Begbies Traynor, 3rd Floor Castlemead",
          "postal_code": "BS1 3AG",
          "locality": "Bristol",
          "address_line_1": "Lower Castle Street"
          
      },
      "kind": "searchresults#company",
      "description_identifier": ["dissolved-on"],
      "date_of_cessation": "2024-02-17"
  }]
}
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  constructor(private apiService: SearchService, private route: ActivatedRoute) {}
  companies: any = [];
  pageTitle = 'SEARCH RESULTS';
  searchTerm: string = '';
  fetchData(searchTerm: string) {
    
    this.apiService.searchCompanies(searchTerm).subscribe(
      (response: any) => {
        this.companies = [...response.items]
      },
      (error: any) => {
        this.companies = [...mockResponse.items]
        console.error('Error fetching data:', error);
      }
    );
  }
  
  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.queryParams['searchTerm']
    if (this.searchTerm) this.fetchData(this.searchTerm);
  
  }
}
