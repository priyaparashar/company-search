import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResultsService } from '../search-results.service';
SearchResultsService
@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent {

  company:any

  constructor(private route: ActivatedRoute, private searchResultsService: SearchResultsService) {}

  ngOnInit(): void {
    this.company  = this.searchResultsService.getData()
  }

}

