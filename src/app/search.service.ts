import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public apiUrl = 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/';
  constructor(public http: HttpClient) {}

  searchCompanies(search_term: string) {
    return this.http.get(`${this.apiUrl}Search?Query=${search_term}`);
  }

  getCompanyOfficers(company_number: string) {
    return this.http.get(`${this.apiUrl}Officers?CompanyNumber=${company_number}`);
  }
}

