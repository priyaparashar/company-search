import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor( private router: Router) {
    
  }
  title = 'company-search';
  searchTerm : String ="";
  onSearch() {
    if(!this.searchTerm) return
    this.router.navigate(['results'], { queryParams: { searchTerm: this.searchTerm }});
  }
}
  
