import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import {Book} from '../book'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   books: Book []
  constructor(private dataService:BookDataService) { }

  ngOnInit() {
    
    //this.dataService.getBooks().subscribe(books=>this.books=books)
    this.dataService.getLatestBooks().subscribe(books=>this.books=books);
  }

}
