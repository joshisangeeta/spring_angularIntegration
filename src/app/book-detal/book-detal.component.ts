import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book-detal',
  templateUrl: './book-detal.component.html',
  styleUrls: ['./book-detal.component.css']
})
export class BookDetalComponent implements OnInit {
  book:Book = new Book();
  bookId:number
  constructor(private dataService : BookDataService,private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params=>this.bookId = params['id']);
      alert(this.bookId)
      this.dataService.getBookById(this.bookId).subscribe(book => this.book =book);
  
     /*
      this.route.params.subscribe(params => this.carId = params[ 'id' ]);
        this.dataService.getCarById(this.carId).subscribe(car => this.updateCar = car);  

     
     
     */ 





  }
  getBookId(){
   // this.dataService.getBookById(this.bookId).subscribe(book=>this.book=book)
  }



}
