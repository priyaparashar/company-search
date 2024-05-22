import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  private data: any;

  constructor() { }

  setData(value: any): void {
    this.data = value;
  }

  getData(): any {
    return this.data;
  }

}

