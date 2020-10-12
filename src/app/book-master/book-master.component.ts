import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book-master',
  templateUrl: './book-master.component.html',
  styleUrls: ['./book-master.component.css']
})
export class BookMasterComponent implements OnInit {
   books:Book[];
  constructor(private dataService:BookDataService) { }

  ngOnInit() {this.dataService.getBooks().subscribe(books=>this.books=books)
  }
  
  deleteBook(id:number){
      this.dataService.deleteBook(id).subscribe(books=>this.books=books);

  }

}
