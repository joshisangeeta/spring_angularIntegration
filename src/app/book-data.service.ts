import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
      
    url='http://localhost:8088/web';
    constructor(private http:HttpClient) { 
    }
    addBook(book:Book):Observable<any> {
      return(this.http.put(this.url.concat('/books'),book));
    }
    getBooks():Observable <any>{

        return(this.http.get(this.url.concat('/books')));

       }
    getLatestBooks():Observable <any> {
        return(this.http.get(this.url.concat('/latestbooks')))
    }

    getBookById(id:number): Observable<any>{
               let   appendUrl = this.url.concat("/books/")+id+''
              return (this.http.get(appendUrl));
       }
      
    updateBook(book:Book) : Observable<any>{
              
              let appendUrl = this.url.concat('/books');
             // return this.http.post(appendUrl,book).pipe(map((res:Response) => res));
              return this.http.post(appendUrl,book);
         //   return this.httpClient.post (this.url.concat(methodUrl), car).map((res:Response) => res);
       }
    
     deleteBook(id:number):Observable<any> {
       alert("del angular service")
      let   appendUrl = this.url.concat("/delbooks/")+id+''
    //  alert(appendUrl)
     // this.http.options(appendUrl);
      return this.http.get(appendUrl);
    }
     

}
