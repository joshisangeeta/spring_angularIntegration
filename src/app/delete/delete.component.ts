import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
   bid:number;
  constructor(private dataService:BookDataService,private route:ActivatedRoute) {
    alert(route.params);
   }

  ngOnInit() {
    this.route.params.subscribe(params=>this.bid =params['id']);
    alert(this.bid);
    this.dataService.deleteBook(this.bid);
    alert("njoninit")

  }
  deleteBook(){
     alert("in delete")
    this.dataService.deleteBook(this.bid);
  }


}
