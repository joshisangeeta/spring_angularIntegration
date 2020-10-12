import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterPreloader } from '@angular/router';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edited :boolean=false;
  editBook:Book = new Book();
  bookId :number;
  //editedBook:Book= new Book();
  constructor(private dataService:BookDataService,private route:ActivatedRoute ) { }

  ngOnInit() {
      this.route.params.subscribe(params=>this.bookId=params['id']);
      this.dataService.getBookById(this.bookId).subscribe(book=>this.editBook=book);

   
  }

  editPrice(){
       
        this.dataService.updateBook(this.editBook).subscribe(book=>this.editBook=book);
         alert("Price edit Successful");
       
         this.edited = true;

  }

}
