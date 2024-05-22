import { Component, Input } from '@angular/core';
import { Company } from '../results/results.component';
import { SearchResultsService } from '../search-results.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  @Input() companies: Company[] | undefined;

  constructor(public searchResultsService: SearchResultsService) { }

  setCompanyData(company: Company) {
    this.searchResultsService.setData(company);
  }

}

