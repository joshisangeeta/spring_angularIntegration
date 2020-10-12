import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   newBook : Book = new Book();
   addedBook:Book = new Book();
   isAdd = false;
  constructor(private dataService:BookDataService) { }

  ngOnInit() {
       
  }

  addBook(){
    
   let bookReturned = this.dataService.addBook(this.newBook).subscribe(book=>this.addedBook =book)
     if(bookReturned != null)
     alert("Book added successfully!!!")
     this.isAdd=true;


  
  }

}
