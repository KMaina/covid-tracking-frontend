import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/results-class/results';
import {ResultsRequestService} from 'src/app/results-service/results.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  ItemsArray!: any[]


  title = 'angular-text-search-highlight';
  searchText = '';
  characters = [
    this.ItemsArray
]

  constructor(private resultsRequestService: ResultsRequestService) { }

  ngOnInit(): void {
    this.resultsRequestService.getData().subscribe((res: any[])=>{
      this.ItemsArray= res;
      // console.log (this.ItemsArray)
      
    })  
  }

}
