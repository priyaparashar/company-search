import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';
export interface Company {
  company_status: string;
  address_snippet: string;
  date_of_creation: string;
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
    country: string;
    locality: string;
    address_line_1: string;
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
              "title": [
                  1,
                  3
              ]
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
          "description_identifier": [
              "incorporated-on"
          ]
      },{
        "company_status": "active",
        "address_snippet": "Boswell Cottage Main Street, North Leverton, Retford, England, DN22 0AD",
        "date_of_creation": "2008-02-11",
        "matches": {
            "title": [
                1,
                3
            ]
        },
        "description": "06500244 - Incorporated on 11 February 2008",
        "links": {
            "self": "/company/06500244"
        },
        "company_number": "06500244",
        "title": "KOTAK LIMITED",
        "company_type": "ltd",
        "address": {
            "premises": "Boswell Cottage Main Street",
            "postal_code": "DN22 0AD",
            "country": "England",
            "locality": "Retford",
            "address_line_1": "North Leverton"
        },
        "kind": "searchresults#company",
        "description_identifier": [
            "incorporated-on"
        ]
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
